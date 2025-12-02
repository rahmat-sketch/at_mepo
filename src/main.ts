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
  await page.goto("https://dev-webapp.mepo.travel/auth/login/", { waitUntil: "networkidle2" });



  console.log("✅ Form filled successfully");
  // await browser.close();
})();
