import puppeteer from "puppeteer";
import { delay } from "./utils/delay"; 


import { at_01_positive } from "./pages/login/at_01_positive";
import { at_02_negative } from "./pages/login/at_02_negative";
import { at_03_negative } from "./pages/login/at_03_negative";
import { at_04_negative } from "./pages/login/at_04_negative";

(async () => {
  console.clear();
  console.log("Test automation dimulai:", new Date().toLocaleTimeString());
  console.log("=========================================");

  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      "--start-maximized",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });

  const page = await browser.newPage();


  async function runTestCase(name: string, fn: (page: any) => Promise<boolean>) {
    console.log(`\n Menjalankan test case: ${name}`);
    try {
      const result = await fn(page);
      if (result) console.log(` ${name} - BERHASIL`);
      else console.warn(`${name} - GAGAL`);
    } catch (err) {
      console.error(`💥 ${name} - ERROR:`, err);
    }
  }

  // === DAFTAR TEST CASE ===
  const tests = [
    { name: "at_01_positive", fn: at_01_positive },
    { name: "at_02_negative", fn: at_02_negative },
    { name: "at_03_negative", fn: at_03_negative },
    { name: "at_04_negative", fn: at_04_negative },
  ];


  for (const test of tests) {
    await runTestCase(test.name, test.fn);

    
    console.log("Menunggu 3 detik sebelum lanjut ke test berikutnya...\n");
    await delay(4000);
  }

 
  console.log("=========================================");
  console.log("Semua test selesai dijalankan!");
  await browser.close();
  console.log("Browser ditutup.");
})();
