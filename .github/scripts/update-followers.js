#!/usr/bin/env node
// Fetches real Instagram follower counts and updates followers.json
//
// SETUP (do this once when you have access to Meta for Developers):
// ─────────────────────────────────────────────────────────────────
// 1. Create an app at developers.facebook.com
//    - Type: Business → add "Instagram Graph API" product
//
// 2. Get the Instagram Business Account IDs for each client.
//    In Meta Business Suite → Settings → Accounts → Instagram Accounts,
//    open each account and note the numeric ID shown in the URL.
//    Example: https://business.facebook.com/latest/instagram_manage/...?asset_id=17841400123456789
//
// 3. Create a System User access token (never expires):
//    Meta Business Suite → Settings → System Users → Add → assign permissions:
//    - instagram_basic (read follower counts)
//    Then click "Generate Token" and copy it.
//
// 4. Add these GitHub Secrets in:
//    Your repo → Settings → Secrets and variables → Actions → New repository secret
//
//    INSTAGRAM_TOKEN  →  the System User token from step 3
//    IG_ID_REYSTONE   →  numeric ID of @reystone_oficial
//    IG_ID_STYLOS     →  numeric ID of @stylos.boutique
//    IG_ID_KAIROSLAB  →  numeric ID of @kairoslab

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const TOKEN = process.env.INSTAGRAM_TOKEN

const ACCOUNTS = [
  { handle: 'reystone_oficial', igUserId: process.env.IG_ID_REYSTONE },
  { handle: 'stylos.boutique',  igUserId: process.env.IG_ID_STYLOS   },
  { handle: 'kairoslab',        igUserId: process.env.IG_ID_KAIROSLAB },
]

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M+'
  if (n >= 1_000)     return Math.floor(n / 1_000) + 'K+'
  return String(n)
}

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let body = ''
      res.on('data', c => body += c)
      res.on('end', () => {
        try { resolve(JSON.parse(body)) }
        catch (e) { reject(new Error('Invalid JSON: ' + body.slice(0, 120))) }
      })
    }).on('error', reject)
  })
}

async function main() {
  if (!TOKEN) {
    console.error('Missing INSTAGRAM_TOKEN secret — skipping update')
    process.exit(0)
  }

  const filePath = path.join(__dirname, '../../followers.json')
  const current  = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
    : {}

  let changed = false

  for (const { handle, igUserId } of ACCOUNTS) {
    if (!igUserId) {
      console.log(`Skip @${handle} — IG_ID secret not set yet`)
      continue
    }
    try {
      const data = await get(
        `https://graph.instagram.com/v18.0/${igUserId}?fields=followers_count&access_token=${TOKEN}`
      )
      if (data.error) {
        console.error(`API error for @${handle}: ${data.error.message}`)
        continue
      }
      const formatted = formatCount(data.followers_count)
      if (current[handle] !== formatted) {
        current[handle] = formatted
        changed = true
        console.log(`@${handle}: ${current[handle]} → ${formatted}`)
      } else {
        console.log(`@${handle}: ${formatted} (no change)`)
      }
    } catch (err) {
      console.error(`Failed @${handle}: ${err.message}`)
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(current, null, 2) + '\n')
    console.log('followers.json updated')
  } else {
    console.log('No changes needed')
  }
}

main()
