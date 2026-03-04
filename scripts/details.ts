import { chromium } from 'playwright';

async function captureDetails() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Scroll to trigger header state
  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/header-scrolled-glass.png' });

  // Scroll to contact section to see header inversion
  await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/contact-full.png' });

  // Scroll down a bit in contact to trigger header dark mode
  await page.evaluate(() => window.scrollBy(0, 100));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/header-dark-mode.png' });

  // Check service card heights again
  await page.evaluate(() => document.querySelector('#services')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(600);

  const cardHeights = await page.evaluate(() => {
    const cards = document.querySelectorAll('#services .grid > div > div');
    return Array.from(cards).map((card, i) => ({
      index: i,
      height: (card as HTMLElement).offsetHeight,
    }));
  });
  console.log('Service card heights after fix:', cardHeights);

  await page.screenshot({ path: 'screenshots/services-fixed.png' });

  await browser.close();
  console.log('Detail screenshots captured');
}

captureDetails().catch(console.error);
