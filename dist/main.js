"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const at_01_positive_1 = require("./pages/login/at_01_positive");
(async () => {
    console.clear();
    console.log("Script started at:", new Date().toLocaleTimeString());
    // === LAUNCH BROWSER ===
    const browser = await puppeteer_1.default.launch({
        headless: false, // tampilkan browser (bisa ubah ke true kalau mau headless)
        defaultViewport: null,
        args: [
            "--start-maximized",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    });
    // === BUAT PAGE BARU ===
    const page = await browser.newPage();
    // === JALANKAN TEST LOGIN ===
    console.log("Menjalankan test case: at_01_positive");
    const result = await (0, at_01_positive_1.at_01_positive)(page);
    if (result) {
        console.log("Test login berhasil!");
    }
    else {
        console.error("Test login gagal!");
    }
    // === TUTUP BROWSER ===
    await browser.close();
    console.log("Browser ditutup. Test selesai!");
})();
