const calculatePriceAndDeadline = require("./script.js");

test('2000 symbols, English, .rtf', () => {
  expect(calculatePriceAndDeadline(2000, "eng", "rtf")).toBe("The price is 240₴");
});