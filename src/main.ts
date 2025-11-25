// src/main.ts
import puppeteer from "puppeteer";
import { test1 } from "./modules/test";
import { test2 } from "./modules/test2";
import { delay } from "./utils/delay";

(async () => {
  console.clear();
  console.log("🚀 MAIN SCRIPT STARTED AT:", new Date().toLocaleTimeString());
  console.log("==========================================\n");

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      "--start-maximized",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
  });

  const page = await browser.newPage();

  try {
    await test1();
  } catch (error) {
    console.error("\n❌ Error while running test1:", error);
  }

  await delay(1000);


  await page.type("#userName", "SARA");
  await page.type("#userEmail", "rahmat@mepo.travel");
  await page.type("#currentAddress", "dev");
  await page.type("#permanentAddress", "dev City");
  await delay(1000);
  await page.click("#submit");


  try {
    await test2();
  } catch (error) {
    console.error("\n❌ Error while running test2:", error);
  }

  console.log("\n🛑 Closing browser...");
  await browser.close();

  console.log("\n==========================================");
  console.log("🎉 ALL TESTS FINISHED");
})();
