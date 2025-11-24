"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const delay_1 = require("./utils/delay");
(async () => {
    console.clear();
    console.log("🚀 Script started at:", new Date().toLocaleTimeString());
    const browser = await puppeteer_1.default.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    const page = await browser.newPage();
    console.log("Navigating to site...");
    await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });
    await (0, delay_1.delay)(1000);
    await page.type("#userName", "John Doe");
    await page.type("#userEmail", "john@example.com");
    await page.type("#currentAddress", "123 Street");
    await page.type("#permanentAddress", "456 City");
    await (0, delay_1.delay)(1000);
    await page.click("#submit");
    console.log("✅ Form filled successfully");
    await browser.close();
})();
