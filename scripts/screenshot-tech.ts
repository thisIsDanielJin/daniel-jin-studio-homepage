import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Scroll progressively to trigger lazy animations
  for (let i = 0; i < 15; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(200);
  }

  // Scroll to tech section
  await page.evaluate(() => {
    const el = document.getElementById('tech');
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'screenshot-tech-section.png' });

  await browser.close();
  console.log('Tech section screenshot saved');
}

takeScreenshot().catch(console.error);
