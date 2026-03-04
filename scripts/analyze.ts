import { chromium } from 'playwright';

async function analyzeIssues() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Check service card heights
  const cardHeights = await page.evaluate(() => {
    const cards = document.querySelectorAll('#services .grid > div > div');
    return Array.from(cards).map((card, i) => ({
      index: i,
      height: (card as HTMLElement).offsetHeight,
      title: card.querySelector('h3')?.textContent
    }));
  });
  console.log('Service card heights:', cardHeights);

  // Hero screenshot
  await page.screenshot({ path: 'screenshots/analyze-hero.png' });

  // Scroll and capture header states
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/analyze-header-scrolled.png' });

  // Services section
  await page.evaluate(() => document.querySelector('#services')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/analyze-services.png' });

  // Contact section
  await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/analyze-contact.png' });

  await browser.close();
  console.log('Analysis complete');
}

analyzeIssues().catch(console.error);
