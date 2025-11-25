// src/main.ts
import puppeteer from "puppeteer";
import { delay } from "./utils/delay";
import { test4 } from "./modules/modules_hanif/test4";

(async () => {
  console.clear();
  console.log("🚀 MAIN SCRIPT STARTED\n");

  const browser = await puppeteer.launch({
  headless: false,                 // jalankan dengan UI
  defaultViewport: null,           // fullscreen default
  slowMo: 30,                      // optional → kasih delay biar UI stabil (bisa 0)
  ignoreDefaultArgs: ['--enable-automation'], // sembunyikan banner "Chrome controlled"
  args: [
    "--start-maximized",
    "--disable-infobars",          // hilangkan text "Chrome is being controlled"
    "--disable-gpu",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",     // fix crash di RAM rendah (Linux / Docker)
    "--disable-blink-features=AutomationControlled", // anti detection
  ]
});

  const page = await browser.newPage();

  try {
    await delay(1000);
    await test4(page);
  } catch (err) {
    console.error("❌ Test failed:", err);
  }

  console.log("\n🛑 Closing browser...");
  await browser.close();

  console.log("\n🎉 ALL TESTS FINISHED");
})();