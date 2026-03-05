import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Screenshot 1: Full header at top (not scrolled)
  await page.screenshot({
    path: 'screenshots/logo-header-top.png',
    clip: { x: 0, y: 0, width: 1400, height: 120 }
  });

  // Screenshot 2: Scroll down to see collapsed header
  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForTimeout(600); // wait for header animation
  await page.screenshot({
    path: 'screenshots/logo-header-scrolled.png',
    clip: { x: 0, y: 0, width: 1400, height: 120 }
  });

  // Screenshot 3: Just the logo area close-up
  const logoElement = await page.locator('header a').first();
  if (await logoElement.isVisible()) {
    await logoElement.screenshot({
      path: 'screenshots/logo-closeup.png'
    });
  }

  await browser.close();
  console.log('Screenshots saved to screenshots/ folder');
}

takeScreenshots().catch(console.error);
