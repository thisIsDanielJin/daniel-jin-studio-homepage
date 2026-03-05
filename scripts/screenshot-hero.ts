import { chromium } from 'playwright';

async function takeScreenshot() {
  // Use headed mode to get WebGL working
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000); // Wait for WebGL to render

  await page.screenshot({
    path: 'screenshots/hero-grainient.png',
  });

  await browser.close();
  console.log('Screenshot saved');
}

takeScreenshot().catch(console.error);
