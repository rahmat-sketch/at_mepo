import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function test4(page: Page) {
  console.log("\n▶️ Running TEST 2...");

  try {
    await page.goto("https://demoqa.com/login", { waitUntil: "networkidle2" });

    await delay(300);

    await page.type("#userName", "Automation Bot");
    await page.type("#password", "123456789");

    await delay(300);

    await page.click("#login");

    console.log("🚀 Test 4 completed successfully!");

  } catch (error) {
    console.error("❌ ERROR in Test 2:", error);
  }
}
