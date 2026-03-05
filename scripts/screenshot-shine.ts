import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Get page height and scroll to see contact section behind header
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  
  // Scroll to bottom minus viewport to be solidly in the contact section
  await page.evaluate((h) => window.scrollTo(0, h - 900), pageHeight);
  await page.waitForTimeout(1000);
  
  // Check if isOnBrightSection is true
  const contactTop = await page.evaluate(() => {
    const el = document.getElementById('contact');
    return el ? el.getBoundingClientRect().top : null;
  });
  console.log('Contact section top:', contactTop);
  
  // Full page screenshot
  await page.screenshot({
    path: 'screenshots/time-to-shine-header.png',
  });

  // Close up of just the header logo
  const logoContainer = await page.locator('header a').first();
  await logoContainer.screenshot({
    path: 'screenshots/logo-on-shine.png'
  });

  await browser.close();
  console.log('Screenshots saved');
}

takeScreenshots().catch(console.error);
