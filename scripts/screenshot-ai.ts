import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll to just above the AI section to trigger animations
  await page.evaluate(() => {
    const el = document.getElementById('ai');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(2000);

  // Now scroll into the section fully to trigger whileInView
  await page.evaluate(() => {
    const el = document.getElementById('ai');
    if (el) {
      el.scrollIntoView({ block: 'start' });
    }
  });
  await page.waitForTimeout(2500);

  const aiSection = page.locator('#ai');
  await aiSection.screenshot({
    path: 'screenshot-ai-section.png',
  });

  await browser.close();
  console.log('AI section screenshot saved');
}

takeScreenshot().catch(console.error);
