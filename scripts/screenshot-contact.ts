import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Scroll to contact/Time to Shine section
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  
  // Screenshot header on bright section
  await page.screenshot({
    path: 'screenshots/logo-on-bright-section.png',
    clip: { x: 0, y: 0, width: 1400, height: 200 }
  });

  // Screenshot footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: 'screenshots/footer.png',
    clip: { x: 0, y: 700, width: 1400, height: 200 }
  });

  await browser.close();
  console.log('Screenshots saved');
}

takeScreenshots().catch(console.error);
