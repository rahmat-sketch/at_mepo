import { Page } from "puppeteer";
import { delay } from "../../utils/delay";

export async function at_02_negative(page: Page): Promise<boolean> {
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
    await page.type('#password-label', "Dev1234567");
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

// Verifikasi Login (versi final, hanya ambil teks error)
try {
  console.log("Menunggu notifikasi error muncul...");

  // Tunggu elemen error di dalam form login
  await page.waitForFunction(() => {
    const form = document.querySelector("form");
    if (!form) return false;
    const errorElements = form.querySelectorAll("p, span, div");
    return Array.from(errorElements).some((el) =>
      el.textContent?.toLowerCase().includes("invalid username or password")
    );
  }, { timeout: 7000 });

  // Ambil teks error spesifik
  const errorText = await page.evaluate(() => {
    const form = document.querySelector("form");
    if (!form) return "";
    const errorElements = form.querySelectorAll("p, span, div");
    const el = Array.from(errorElements).find((el) =>
      el.textContent?.toLowerCase().includes("invalid username or password")
    );
    if (!el) return "";

    // Ambil hanya teks baris error
    const rawText = el.textContent?.trim() || "";
    // Potong supaya tidak ambil teks di luar error
    const line = rawText.split("\n").find(t => t.toLowerCase().includes("invalid")) || rawText;
    return line.trim();
  });

  if (errorText) {
    console.log("✅ Pesan error login muncul:", errorText);
    return true;
  } else {
    console.warn("⚠️ Tidak menemukan teks error di area form.");
    return false;
  }

} catch (err) {
  console.warn("⚠️ Tidak ada pesan error login muncul dalam 7 detik.");
  return false;
}

}
