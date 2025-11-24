"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const delay_1 = require("./utils/delay");
(async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });
    await page.type(`xpath=//input[@id='name']`, `John Doe`);
    await (0, delay_1.delay)(50);
    await (0, delay_1.delay)(50);
    await page.evaluate(() => {
        document.querySelector("#submit")?.scrollIntoView({ behavior: "smooth" });
    });
    await (0, delay_1.delay)(500);
    await page.click("#submit");
    await page.waitForSelector("#output");
    const result = await page.evaluate(() => {
        const output = document.querySelector("#output");
        return output?.textContent?.trim() || "";
    });
    console.log("✅ Hasil form submission:");
    console.log(result);
    await page.screenshot({ path: "result.png", fullPage: true });
    console.log("📸 Screenshot disimpan: result.png");
    await browser.close();
})();
