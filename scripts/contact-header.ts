import { chromium } from 'playwright';

async function captureContactHeader() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Scroll through page to trigger animations
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
  });
  await page.waitForTimeout(500);

  // Now scroll to contact section
  await page.evaluate(() => {
    const contact = document.querySelector('#contact');
    if (contact) {
      const rect = contact.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + rect.top - 50);
    }
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/contact-with-header.png' });

  await browser.close();
  console.log('Contact screenshot captured');
}

captureContactHeader().catch(console.error);
