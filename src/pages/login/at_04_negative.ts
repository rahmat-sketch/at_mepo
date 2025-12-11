import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function at_04_negative(page: Page): Promise<boolean> {
  console.log("Navigating to Login Page...");

  // To URL
  try {
    await page.goto("https://dev-webapp.mepo.travel/auth/login/", { waitUntil: "networkidle2" });
    console.log("Halaman login berhasil dibuka");
  } catch (err) {
    console.error("Gagal membuka halaman login:", err);
    return false;
  }

  // Type Password
    try {
    await page.type("#password-label", "Dev123456");
    console.log("Password diisi");
  } catch (err) {
    console.error("Gagal mengisi password:", err);
    return false;
  }


  await delay(1000);

  // Cek Login Disabled
  try {
    const loginButton = await page.$("button[type='submit']");
    if (!loginButton) {
      console.error("Button login tidak ditemukan di halaman.");
      return false;
    }

    const isDisabled = await page.$eval(
      "button[type='submit']",
      (btn) => btn.hasAttribute("disabled") || btn.classList.contains("Mui-disabled")
    );

    if (isDisabled) {
      console.log("Button login dalam kondisi Disable ");
      return true; 
    } else {
      console.warn("Button login masih Aktif");
      return false;
    }
  } catch (err) {
    console.error("Gagal memeriksa status tombol login:", err);
    return false;
  }
}
