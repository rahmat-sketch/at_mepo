import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function at_01_positive(page: Page): Promise<boolean> {
  console.log("Navigating to Login Page...");

  // To URL
  try {
    await page.goto("https://dev-webapp.mepo.travel/auth/login/", { waitUntil: "networkidle2" });
    console.log("Halaman login berhasil dibuka");
  } catch (err) {
    console.error("Gagal membuka halaman login:", err);
    return false;
  }

  // Type Email
  try {
    await page.type('#username-label', "d5@yopmail.com");
    console.log("Email diisi");
  } catch (err) {
    console.error("Gagal mengisi email:", err);
    return false;
  }

  // Type Password
  try {
    await page.type('#password-label', "Dev123456");
    console.log("Password diisi");
  } catch (err) {
    console.error("Gagal mengisi password:", err);
    return false;
  }

  // Click Button Login
  try {
    await delay(1000);
    await page.click(`button[type='submit']`);
    console.log("Tombol login diklik");
  } catch (err) {
    console.error("Gagal mengklik tombol login:", err);
    return false;
  }

await delay(3000);


  // Verifikasi Login
 try {
    console.log("Menunggu notifikasi muncul...");
    await page.waitForSelector(".Toastify__toast", { timeout: 5000 });

    const toastText = await page.$eval(".Toastify__toast", (el) => el.textContent || "");
    console.log("Notifikasi muncul:", toastText.trim());

    if (toastText.toLowerCase().includes("berhasil") || toastText.toLowerCase().includes("success")) {
      console.log("Menampilkan toastify login berhasil.");
      return true;
    } else {
      console.warn("Belum menampilkan toastify login berhasil");
      return false;
    }
  } catch (err) {
    console.warn("Tidak ada notifikasi Toastify muncul dalam 5 detik.");
    return false;
  }

  
}
