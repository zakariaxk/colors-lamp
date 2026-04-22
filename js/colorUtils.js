/* global module */
function formatColorName(color) {
  return color.trim().toLowerCase();
}

function isValidColorInput(color) {
  return color.trim().length > 0;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { formatColorName, isValidColorInput };
}