import puppeteer from "puppeteer";
import { delay } from "../utils/delay";  // FIXED PATH

export const test2 = async () => {
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
  await page.goto("https://demoqa.com/checkbox", { waitUntil: "networkidle2" });

  await delay(200);
  

  console.log("✅ Form filled successfully");
};
