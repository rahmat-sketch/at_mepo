import puppeteer from "puppeteer";
import { test1 } from "./modules/test";
import { test2 } from "./modules/modules_silfi/test2";
import { delay } from "./utils/delay";

(async () => {
  console.clear();
  console.log("🚀 MAIN SCRIPT STARTED\n");

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    slowMo: 30,
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
      "--start-maximized",          
      "--disable-infobars",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-blink-features=AutomationControlled",
    ],
  });

  const page = await browser.newPage();

  console.log("📌 Running test suite...\n");

  // -------- TEST 1 --------
  try {
    console.log("▶️ Starting Test 1...");
    await test1(page);
    console.log("✔️ Test 1 Completed\n");
  } catch (err) {
    console.error("❌ Test 1 Failed:", err);
  }

  await delay(1000);

  // -------- TEST 2 --------
  try {
    console.log("▶️ Starting Test 2...");
    await test2(page);
    console.log("✔️ Test 2 Completed\n");
  } catch (err) {
    console.error("❌ Test 2 Failed:", err);
  }

  console.log("\n🛑 Closing browser...");
  await browser.close();

  console.log("\n🎉 ALL TESTS FINISHED");
})();
