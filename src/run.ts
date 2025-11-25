import { execSync } from "child_process";

const file = process.argv[2];

if (!file) {
  console.error("❌ Error: Harap masukkan nama file. Contoh:");
  console.error("   npm run dev main1");
  process.exit(1);
}

const command = `ts-node src/${file}.ts`;

console.log(`▶ Menjalankan: ${command}`);
execSync(command, { stdio: "inherit" });
