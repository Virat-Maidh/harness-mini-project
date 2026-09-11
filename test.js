const { add, multiply } = require("./index");

function assertEqual(actual, expected, testName) {
  if (actual !== expected) {
    console.error(`❌ FAILED: ${testName}`);
    console.error(`Expected: ${expected}`);
    console.error(`Received: ${actual}`);

    process.exit(1);
  }

  console.log(`✅ PASSED: ${testName}`);
}

console.log("\nRunning tests...\n");

assertEqual(add(2, 3), 5, "Addition test");
assertEqual(add(10, 20), 30, "Large addition test");

assertEqual(multiply(4, 5), 20, "Multiplication test");
assertEqual(multiply(3, 10), 30, "Large multiplication test");

console.log("\n🎉 All tests passed!");

