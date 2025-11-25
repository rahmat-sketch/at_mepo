// src/main.ts
import { test1 } from "./modules/test"; // Import test script dari folder modules
import { test2 } from "./modules/test2"; // Import test2 script dari folder modules
import { delay } from "./utils/delay";  // FIXED PATH


(async () => {
  console.clear();
  console.log("🚀 MAIN SCRIPT STARTED AT:", new Date().toLocaleTimeString());
  console.log("==========================================\n");

  try {
    await test1(); // Jalankan test
  } catch (error) {
    console.error("\n❌ Error while running test:", error);
  }

  await delay(1000); // Tambahkan delay antar test

  try {
    await test2(); // Jalankan test2
  } catch (error) {
    console.error("\n❌ Error while running test2:", error);
    
  }

  console.log("\n==========================================");
  console.log("🎉 ALL TESTS FINISHED");
})();
