function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("================================");
console.log("     Harness Mini Project");
console.log("================================");

console.log("2 + 3 =", add(2, 3));
console.log("4 × 5 =", multiply(4, 5));

module.exports = {
  add,
  multiply
};
