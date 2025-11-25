import { Page } from "puppeteer";
import { delay } from "../utils/delay";

export async function test1(page: Page) {
  console.log("\n▶️ Running TEST 1...");

  try {
    await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });

    await delay(300);

    await page.type("#userName", "Rahmat s");
    await page.type("#userEmail", "sasa@mepo.travel");
    await page.type("#currentAddress", "test");
    await page.type("#permanentAddress", "dev City");

    await delay(300);

    await page.click("#submit");

    console.log("✅ Test 1 completed successfully!");

  } catch (error) {
    console.error("❌ ERROR in Test 1:", error);
  }
}
