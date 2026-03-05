import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Scroll to the very bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);

  // Crop just the footer area
  const footer = page.locator('footer');
  await footer.screenshot({ path: 'screenshot-footer.png' });

  await browser.close();
  console.log('Footer screenshot saved');
}

takeScreenshot().catch(console.error);
