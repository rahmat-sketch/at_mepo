import puppeteer from "puppeteer";
import { at_01_positive } from "./pages/login/at_01_positive";

(async () => {
  console.clear();
  console.log("Script started at:", new Date().toLocaleTimeString());

  // === LAUNCH BROWSER ===
  const browser = await puppeteer.launch({
    headless: false,             // tampilkan browser (bisa ubah ke true kalau mau headless)
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
  const result = await at_01_positive(page);


  if (result) {
    console.log("Test login berhasil!");
  } else {
    console.error("Test login gagal!");
  }

  // === TUTUP BROWSER ===
  await browser.close();
  console.log("Browser ditutup. Test selesai!");
})();
