import puppeteer from "puppeteer";
import { delay } from "../utils/delay";  // FIXED PATH

export const test1 = async () => {
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

  await delay(200);
  await page.type("#userName", "Rahmat s");
  await page.type("#userEmail", "sasa@mepo.travel");
  await page.type("#currentAddress", "test");
  await page.type("#permanentAddress", "dev City");
  await delay(200);
  await page.click("#submit");

  console.log("✅ Form filled successfully");
};
