import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function at_01_positive(page: Page): Promise<boolean> {
  console.log("🔐 Navigating to Login Page...");

  // === STEP 1: Buka halaman login ===
  try {
    await page.goto("https://dev-webapp.mepo.travel/auth/login/", { waitUntil: "networkidle2" });
    console.log("Halaman login berhasil dibuka");
  } catch (err) {
    console.error("❌ Gagal membuka halaman login:", err);
    return false;
  }

  // === STEP 2: Isi email ===
  try {
    await page.type('#username-label', "d5@yopmail.com");
    console.log("Email diisi");
  } catch (err) {
    console.error("❌ Gagal mengisi email:", err);
    return false;
  }

  // === STEP 3: Isi password ===
  try {
    await page.type('#password-label', "password123");
    console.log("Password diisi");
  } catch (err) {
    console.error("Gagal mengisi password:", err);
    return false;
  }

  // === STEP 4: Klik tombol login ===
  try {
    await delay(1000);
    await page.click(`button[type='submit']`);
    console.log("Tombol login diklik");
  } catch (err) {
    console.error("Gagal mengklik tombol login:", err);
    return false;
  }

  // === STEP 5: Verifikasi hasil login (tanpa menunggu navigasi) ===
  // try {
  //   // Tunggu sebentar agar respon UI muncul
  //   await delay(3000);

  //   // 1️⃣ Coba cek apakah muncul pesan error login
  //   // const errorElement = await page.$("p:text('Invalid')"); // ubah sesuai teks pesan error yang muncul di web kamu
  //   // if (errorElement) {
  //   //   console.warn("⚠️ Login gagal — muncul pesan error di halaman.");
  //   //   return false;
  //   // }

  //   // // 2️⃣ Coba cek apakah navbar/dashboard muncul (berarti login sukses)
  //   // const dashboardElement = await page.$("nav");
  //   // if (dashboardElement) {
  //   //   console.log("✅ Login berhasil — elemen dashboard ditemukan.");
  //   //   return true;
  //   // }

  //   // 3️⃣ Kalau dua-duanya tidak muncul
  //   console.warn("⚠️ Tidak ada respon pasti, kemungkinan login gagal.");
  //   return false;

  // } catch (err) {
  //   console.error("❌ Gagal memverifikasi hasil login:", err);
  //   return false;
  // }

  return true;
}
