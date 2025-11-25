import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function test2(page: Page) {
  console.log("\n▶️ Running TEST 2...");

  try {
    await page.goto("https://codenboxautomationlab.com/registration-form/", { waitUntil: "networkidle2" });

    await delay(300);

    await page.type("#nf-field-17", "ardila")
    await delay(50);
    console.log("Filled Name");

    await page.type("#nf-field-18", "putri")
    await delay(50);
    console.log("Last Filled Name");

    await page.type("#nf-field-19", "ardila@gmail.com") 
    await delay(50);
    console.log("email");

    await page.type("#nf-field-20", "0812683923") 
    await delay(50);
    console.log("phone");

    await page.select('#nf-field-22', 'power-bi-and-sql');
    await delay(50);
    console.log("Selected course");

    await page.select('#nf-field-24', 'march'); 
    await delay(50);
    console.log("Selected course");

    await page.click("#nf-label-class-field-23-3");
    await delay(50);
    console.log("Clicked part time");

    await page.click("#nf-field-15");
    await delay(500);
    console.log("Clicked submit button");

  
    await page.click("#nf-field-15");
    await delay(500);
    console.log("Clicked submit button");

    console.log("🚀 Test 2 completed successfully!");

  } catch (error) {
    console.error("❌ ERROR in Test 2:", error);
  }
}
