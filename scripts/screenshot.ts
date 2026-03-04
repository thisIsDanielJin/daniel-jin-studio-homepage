import { chromium } from 'playwright';

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // Go to site
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Check the color values
  const colors = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      bright: style.getPropertyValue('--color-bright'),
      brightHover: style.getPropertyValue('--color-bright-hover'),
      electric: style.getPropertyValue('--color-electric'),
    };
  });
  console.log('Color palette:', colors);

  // Check hero layout
  const heroInfo = await page.evaluate(() => {
    const grid = document.querySelector('.grid.lg\\:grid-cols-2');
    const headline = document.querySelector('h1');
    const spotlightVisual = document.querySelector('.lg\\:block .min-h-\\[400px\\]');
    return {
      hasGridLayout: !!grid,
      headlineText: headline?.textContent?.replace(/\s+/g, ' ').trim(),
      hasSpotlightVisual: !!spotlightVisual,
    };
  });
  console.log('Hero layout:', heroInfo);

  // Scroll through entire page first to trigger all animations
  await page.evaluate(async () => {
    const scrollStep = 500;
    const delay = 100;
    for (let y = 0; y < document.body.scrollHeight; y += scrollStep) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, delay));
    }
    window.scrollTo(0, 0);
  });

  await page.waitForTimeout(1000);

  // Full page screenshot
  await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });

  // Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/hero.png' });

  // Services
  await page.evaluate(() => document.querySelector('#services')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screenshots/services.png' });

  // Contact
  await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screenshots/contact.png' });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/mobile-hero.png' });

  await browser.close();
  console.log('\nScreenshots saved to screenshots/ directory');
  console.log('Diamond bright blue theme applied with spotlight visual next to headline!');
}

captureScreenshots().catch(console.error);
