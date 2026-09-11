const { add, multiply } = require("./index");

test("Addition test", () => {
  expect(add(2, 3)).toBe(5);
});

test("Large addition test", () => {
  expect(add(10, 20)).toBe(30);
});

test("Multiplication test", () => {
  expect(multiply(4, 5)).toBe(20);
});

test("Large multiplication test", () => {
  expect(multiply(3, 10)).toBe(30);
});
