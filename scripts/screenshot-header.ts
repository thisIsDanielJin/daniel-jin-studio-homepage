import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // Press Escape to close any error overlay
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // Full page screenshot at top
  await page.screenshot({
    path: 'screenshots/page-top.png',
  });

  // Scroll down to trigger scrolled header
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(700);
  
  // Full page screenshot after scroll
  await page.screenshot({
    path: 'screenshots/page-scrolled.png',
  });

  await browser.close();
  console.log('Screenshots saved');
}

takeScreenshots().catch(console.error);
