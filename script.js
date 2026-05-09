fetch('followers.json')
  .then(r=>r.json())
  .then(data=>{
    document.querySelectorAll('[data-ig-followers]').forEach(el=>{
      const v=data[el.dataset.igFollowers]
      if(v)el.textContent=v
    })
  })
  .catch(()=>{})

const nav=document.getElementById('nav')
const burger=document.getElementById('burger')
const navLinks=document.getElementById('navLinks')
const revealItems=document.querySelectorAll('.reveal')
let navStuck=false
let scrollTicking=false

function updateNav(){
  const shouldStick=window.scrollY>40
  if(shouldStick===navStuck)return
  navStuck=shouldStick
  nav.classList.toggle('stuck',shouldStick)
}
function setMenu(open){
  burger.classList.toggle('open',open)
  navLinks.classList.toggle('open',open)
  burger.setAttribute('aria-expanded',String(open))
  burger.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')
}
function toggleMenu(){setMenu(!navLinks.classList.contains('open'))}
function closeMenu(){setMenu(false)}

window.addEventListener('scroll',()=>{
  if(scrollTicking)return
  scrollTicking=true
  requestAnimationFrame(()=>{
    updateNav()
    scrollTicking=false
  })
},{passive:true})
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})
updateNav()

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches
if(reduceMotion||!('IntersectionObserver' in window)){
  revealItems.forEach(el=>el.classList.add('up'))
}else{
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('up')})},{threshold:0.08})
  revealItems.forEach(el=>obs.observe(el))
}

const ans={},txt={}
const steps=document.querySelectorAll('.q-step')
const progress=document.getElementById('quizProgress')
const progressFill=document.getElementById('progFill')
function setProgress(value){
  progressFill.style.width=value+'%'
  progress.setAttribute('aria-valuenow',String(value))
}
document.querySelectorAll('.q-step').forEach((step,si)=>{
  step.querySelectorAll('.q-opt').forEach(opt=>{
    opt.setAttribute('aria-pressed','false')
    opt.addEventListener('click',function(){
      step.querySelectorAll('.q-opt').forEach(o=>{
        o.classList.remove('sel')
        o.setAttribute('aria-pressed','false')
      })
      this.classList.add('sel')
      this.setAttribute('aria-pressed','true')
      ans[si]=parseInt(this.dataset.v)
      txt[si]=this.textContent.trim().slice(1).trim()
      const nb=document.getElementById('n'+si)
      if(nb)nb.disabled=false
    })
  })
})
function nxt(i){if(ans[i]===undefined)return;steps[i].classList.remove('active');steps[i+1].classList.add('active');setProgress(((i+2)/5)*100)}
function prv(i){steps[i].classList.remove('active');steps[i-1].classList.add('active');setProgress((i/5)*100)}
function showRes(){
  if(ans[4]===undefined)return
  const total=ans[0]+ans[1]+ans[2]+ans[3]+ans[4]
  let level,emoji,text
  if(total<=4){level='COMENZANDO DESDE CERO';emoji='🌱';text='Estás en el punto de partida — y eso es perfecto. Nos especializamos exactamente en esto: construir tu marca desde cero con una base sólida, estrategia clara y contenido que conecte desde el primer día.'}
  else if(total<=8){level='EN MODO CONSTRUCCIÓN';emoji='🔨';text='Ya tienes presencia pero falta dirección y consistencia. Tienes el potencial, solo necesitas la estrategia y alguien que te ayude a ejecutarla con enfoque real.'}
  else if(total<=12){level='LISTO PARA ESCALAR';emoji='📈';text='Tienes la base construida y estás generando resultados. Ahora es el momento de escalar. Con la estrategia correcta puedes multiplicar tu alcance y tus ventas en meses.'}
  else{level='NIVEL AVANZADO';emoji='🚀';text='Tu marca ya tiene tracción real. Pero siempre hay un siguiente nivel. Podemos ayudarte a escalar más rápido, profesionalizar tu contenido y abrir nuevos canales.'}
  const msg=encodeURIComponent(`¡Hola Meraki! Hice el test en su web y este es mi diagnóstico:\n\n📊 *Nivel: ${level}*\n\n📝 Mis respuestas:\n1. Presencia: ${txt[0]||'-'}\n2. Audiencia: ${txt[1]||'-'}\n3. Contenido: ${txt[2]||'-'}\n4. Ventas: ${txt[3]||'-'}\n5. Obstáculo: ${txt[4]||'-'}\n\nQuisiera saber cómo pueden ayudarme. 🙌`)
  document.getElementById('rEmoji').textContent=emoji
  document.getElementById('rLevel').textContent=level
  document.getElementById('rText').textContent=text
  document.getElementById('rSummary').innerHTML=`<div class="sum-row"><span class="sum-l">Presencia</span><span class="sum-v">${(txt[0]||'').substring(0,36)}</span></div><div class="sum-row"><span class="sum-l">Audiencia</span><span class="sum-v">${(txt[1]||'').substring(0,36)}</span></div><div class="sum-row"><span class="sum-l">Contenido</span><span class="sum-v">${(txt[2]||'').substring(0,36)}</span></div><div class="sum-row"><span class="sum-l">Obstáculo</span><span class="sum-v">${(txt[4]||'').substring(0,36)}</span></div>`
  document.getElementById('waBtn').href=`https://wa.me/5363284262?text=${msg}`
  steps[4].classList.remove('active')
  document.getElementById('qRes').classList.add('show')
  setProgress(100)
}
