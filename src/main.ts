import puppeteer from "puppeteer";
import { at_01_positive } from "./pages/login/at-01-positive";

(async () => {
  console.clear();
  console.log("🚀 Script started at:", new Date().toLocaleTimeString());

  // === LAUNCH BROWSER ===
  const browser = await puppeteer.launch({
    headless: false,             // tampilkan browser (bisa ubah ke true kalau mau headless)
    defaultViewport: null,       // biar tampilan full window
    args: [
      "--start-maximized",       // buka browser full screen
      "--disable-gpu",
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
  });

  // === BUAT PAGE BARU ===
  const page = await browser.newPage();

  // === JALANKAN TEST LOGIN ===
  console.log("▶️ Menjalankan test case: at_01_positive");
  const result = await at_01_positive(page);

  // === TAMPILKAN HASIL TEST ===
  if (result) {
    console.log("✅ Test login berhasil!");
  } else {
    console.error("❌ Test login gagal!");
  }

  // === TUTUP BROWSER ===
  await browser.close();
  console.log("🧹 Browser ditutup. Test selesai!");
})();
