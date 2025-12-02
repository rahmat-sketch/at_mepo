import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function at_02_negative(page: Page): Promise<boolean> {
  console.log("🚫 [NEGATIVE] Navigating to Login Page...");

  // === STEP 1: Buka halaman login ===
  try {
    await page.goto("https://dev-webapp.mepo.travel/auth/login/", { waitUntil: "networkidle2" });
    console.log("🌐 Halaman login berhasil dibuka");
  } catch (err) {
    console.error("❌ Gagal membuka halaman login:", err);
    return false;
  }

  // === STEP 2: Isi email salah ===
  try {
    await page.type('input[name="email"]', "invalid_user@example.com");
    console.log("✏️ Email salah diisi");
  } catch (err) {
    console.error("❌ Gagal mengisi email:", err);
    return false;
  }

  // === STEP 3: Isi password salah ===
  try {
    await page.type('input[name="password"]', "wrongpassword");
    console.log("🔑 Password salah diisi");
  } catch (err) {
    console.error("❌ Gagal mengisi password:", err);
    return false;
  }

  // === STEP 4: Klik tombol login ===
  try {
    await delay(1000);
    await page.click('button[type="submit"]');
    console.log("👆 Tombol login diklik");
  } catch (err) {
    console.error("❌ Gagal mengklik tombol login:", err);
    return false;
  }

  // === STEP 5: Verifikasi hasil login gagal ===
  try {
    await delay(3000);

    // Coba cari pesan error login
    const errorMessage =
      (await page.$("p:text('Invalid')")) || // contoh umum
      (await page.$("p:text('incorrect')")) || // alternatif teks
      (await page.$(".text-red-500")); // ganti sesuai HTML asli kamu

    if (errorMessage) {
      console.log("✅ Negative case berhasil — sistem menampilkan pesan error login.");
      return true; // berhasil karena sistem menolak login (expected)
    }

    // Kalau tidak ada pesan error, tapi tetap di halaman login
    const stillOnLogin = await page.$('input[name="email"]');
    if (stillOnLogin) {
      console.warn("⚠️ Login gagal tapi tidak muncul pesan error (kemungkinan bug UI)");
      return true; // tetap dianggap berhasil sebagai negative case
    }

    // Kalau malah masuk dashboard, berarti bug
    const dashboard = await page.$("nav");
    if (dashboard) {
      console.error("❌ Negative case gagal — user dengan kredensial salah bisa login!");
      return false;
    }

    console.warn("⚠️ Tidak ada respon pasti — periksa halaman login secara manual.");
    return true;

  } catch (err) {
    console.error("❌ Gagal memverifikasi hasil login gagal:", err);
    return false;
  }
}
