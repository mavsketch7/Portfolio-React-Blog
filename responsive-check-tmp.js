const { chromium } = require('playwright-core')

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const BASE = 'http://localhost:3200'

const viewports = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-12', width: 390, height: 844 },
  { name: 'iphone-landscape', width: 844, height: 390 },
  { name: 'small-android', width: 320, height: 640 },
  { name: 'tablet', width: 768, height: 1024 },
]

const pages = [
  '/',
  '/blog',
  '/blog/bienvenido-a-mi-blog',
  '/proyectos/mrs-inmobiliaria-cordoba',
]

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME_PATH })
  const results = []

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    })
    const page = await context.newPage()

    for (const path of pages) {
      await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' })
      await page.waitForTimeout(400)

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement
        const body = document.body
        return {
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          bodyScrollWidth: body.scrollWidth,
          scrollHeight: doc.scrollHeight,
        }
      })

      const hasHorizontalOverflow = metrics.scrollWidth > metrics.clientWidth + 1

      let offenders = []
      if (hasHorizontalOverflow) {
        offenders = await page.evaluate(() => {
          const vw = document.documentElement.clientWidth
          const all = Array.from(document.querySelectorAll('body *'))
          return all
            .filter((el) => el.getBoundingClientRect().right > vw + 1)
            .slice(0, 8)
            .map((el) => {
              const r = el.getBoundingClientRect()
              return `${el.tagName}.${[...el.classList].slice(0, 3).join('.')} right=${Math.round(r.right)} width=${Math.round(r.width)}`
            })
        })
      }

      results.push({
        viewport: vp.name,
        path,
        ...metrics,
        hasHorizontalOverflow,
        offenders,
      })

      const safeName = path.replace(/\//g, '_') || '_home'
      await page.screenshot({
        path: `C:/Users/mavsk/AppData/Local/Temp/claude/c--Users-mavsk-Documents-mi-portfolio/dd87c0c7-3a12-4506-8ff9-1a666d89ee69/scratchpad/shot-${vp.name}${safeName}.png`,
        fullPage: true,
      })
    }

    await context.close()
  }

  await browser.close()

  console.log(JSON.stringify(results, null, 2))

  const overflowing = results.filter((r) => r.hasHorizontalOverflow)
  if (overflowing.length > 0) {
    console.log('\n=== HORIZONTAL OVERFLOW DETECTED ===')
    for (const o of overflowing) {
      console.log(`${o.viewport} ${o.path}: scrollWidth=${o.scrollWidth} clientWidth=${o.clientWidth}`)
      o.offenders.forEach((line) => console.log('  ' + line))
    }
  } else {
    console.log('\nNo horizontal overflow detected on any tested viewport/page.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
