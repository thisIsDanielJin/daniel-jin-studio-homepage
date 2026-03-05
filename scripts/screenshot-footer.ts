import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Scroll to the very bottom to show footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  
  // Take screenshot of the footer area
  const footer = await page.locator('footer');
  await footer.screenshot({
    path: 'screenshots/footer-logo.png'
  });

  await browser.close();
  console.log('Footer screenshot saved');
}

takeScreenshots().catch(console.error);
