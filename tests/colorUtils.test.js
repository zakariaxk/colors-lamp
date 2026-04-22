const { formatColorName, isValidColorInput } = require("../js/colorUtils");

test("formatColorName trims spaces and converts to lowercase", () => {
  expect(formatColorName("  Blue  ")).toBe("blue");
});

test("isValidColorInput returns true for non-empty input", () => {
  expect(isValidColorInput("red")).toBe(true);
});

test("isValidColorInput returns false for blank input", () => {
  expect(isValidColorInput("   ")).toBe(false);
});