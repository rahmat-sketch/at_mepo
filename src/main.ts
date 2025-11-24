import puppeteer from "puppeteer";
import { delay } from "./utils/delay";

(async () => {
  console.clear();
  console.log("🚀 Script started at:", new Date().toLocaleTimeString());

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

  console.log("Navigating to site...");
  await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });

  await delay(1000);
  await page.type("#userName", "devdev");
  await page.type("#userEmail", "rahmat@mepo.travel");
  await page.type("#currentAddress", "asasasasasa");
  await page.type("#permanentAddress", "dev City");
  await delay(1000);
  await page.click("#submit");

  console.log("✅ Form filled successfully");
  // await browser.close();
})();
