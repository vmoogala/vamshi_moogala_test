const isOverlapping = require("./overlapOrNot.js");

test("passing empty arguments will throw an error", () => {
  expect(() => {
    isOverlapping();
  }).toThrow("Some values are missing");
});

test("passing invalid arguments will throw an error", () => {
  expect(() => {
    isOverlapping([1, 5], []);
  }).toThrow("Values are not passed correctly");
});

test("lines [1, 5], [2, 6] will overlap", () => {
  expect(isOverlapping([1, 5], [2, 6])).toBe(true);
});

test("lines [1, 5], [6, 8] will not overlap", () => {
  expect(isOverlapping([1, 5], [6, 8])).toBe(false);
});
