import { chromium } from 'playwright';
import * as fs from 'fs';

async function fetchGrainient() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

  // Fetch the raw TSX file
  await page.goto('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-default/Backgrounds/Grainient/Grainient.tsx');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  const content = await page.content();
  const bodyText = await page.locator('body').textContent();
  
  console.log('=== GRAINIENT TSX ===');
  console.log(bodyText);
  
  // Save to file
  fs.writeFileSync('screenshots/grainient-code.txt', bodyText || '');

  // Also get the CSS
  await page.goto('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-default/Backgrounds/Grainient/Grainient.css');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  const cssText = await page.locator('body').textContent();
  console.log('=== GRAINIENT CSS ===');
  console.log(cssText);
  
  fs.writeFileSync('screenshots/grainient-css.txt', cssText || '');

  await browser.close();
  console.log('Done');
}

fetchGrainient().catch(console.error);
