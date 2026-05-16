import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Clients from '@/components/Clients'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Quiz from '@/components/Quiz'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <Clients />
        <Portfolio />
        <About />
        <Quiz />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
