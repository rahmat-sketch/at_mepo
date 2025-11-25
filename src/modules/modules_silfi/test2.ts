import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function test2(page: Page) {
  console.log("\n▶️ Running TEST 2...");

  try {
    await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });

    await delay(300);

    await page.type("#userName", "Automation Bot");
    await page.type("#userEmail", "bot@test.com");
    await page.type("#currentAddress", "Jl. Puppeteer Automation");
    await page.type("#permanentAddress", "QA System");

    await delay(300);

    await page.click("#submit");

    console.log("🚀 Test 2 completed successfully!");

  } catch (error) {
    console.error("❌ ERROR in Test 2:", error);
  }
}
