const countPrice = require("./script.js");
const countDeadline = require("./script.js");
const findDeadline = require("./script.js");
const calculatePriceAndDeadline = require("./script.js");

// All Passed!

describe("countPrice", () => {
  test.each`
    length  | language | result
    ${1500} | ${"ru"}  | ${"75.00"}
    ${1500} | ${"ua"}  | ${"75.00"}
    ${1500} | ${"eng"} | ${"180.00"}
    ${5000} | ${"ru"}  | ${"250.00"}
    ${5000} | ${"ua"}  | ${"250.00"}
    ${5000} | ${"eng"} | ${"600.00"}
  `("countPrice__table", ({ length, language, result }) => {
    expect(countPrice(length, language)).toBe(result);
  });
});

// All Passed!

describe("countDeadline", () => {
  test.each`
    length  | language | result
    ${1500} | ${"ru"}  | ${"2"}
    ${1500} | ${"ua"}  | ${"2"}
    ${1500} | ${"eng"} | ${"5"}
    ${5000} | ${"ru"}  | ${"4"}
    ${5000} | ${"ua"}  | ${"4"}
    ${5000} | ${"eng"} | ${"16"}
  `("countPrice__table", ({ length, language, result }) => {
    expect(countDeadline(length, language)).toBe(result);
  });
});

// All Passed!

describe("findDeadline", () => {
  test.each`
    day   | month | hours | minutes | time | result
    ${4}  | ${6}  | ${18} | ${30}   | ${3} | ${"June 07 Mon, at 12:30"}
    ${4}  | ${6}  | ${15} | ${0}    | ${3} | ${"June 04 Fri, at 18:00"}
    ${4}  | ${6}  | ${21} | ${45}   | ${3} | ${"June 07 Mon, at 13:45"}
    ${5}  | ${6}  | ${13} | ${0}    | ${5} | ${"June 07 Mon, at 15:00"}
    ${6}  | ${6}  | ${9}  | ${20}   | ${5} | ${"June 07 Mon, at 15:20"}
    ${7}  | ${6}  | ${12} | ${15}   | ${5} | ${"June 07 Mon, at 17:15"}
    ${8}  | ${6}  | ${11} | ${0}    | ${5} | ${"June 08 Tue, at 16:00"}
    ${9}  | ${6}  | ${20} | ${5}    | ${5} | ${"June 10 Thu, at 15:05"}
    ${10} | ${6}  | ${16} | ${15}   | ${5} | ${"June 11 Fri, at 12:15"}
  `("countPrice__table", ({ day, month, hours, minutes, time, result }) => {
    expect(findDeadline(day, month, hours, minutes, time)).toBe(result);
  });
});

// All Passed!

describe("calculatePriceAndDeadline", () => {
  test.each`
    day  | month | hours | minutes | length  | language | format    | result
    ${4} | ${6}  | ${18} | ${30}   | ${1300} | ${"ru"}  | ${"rtf"}  | ${"The price is 65₴. Deadline is on June 07 Mon, at 10:30"}
    ${4} | ${6}  | ${15} | ${0}    | ${1250} | ${"ua"}  | ${"doc"}  | ${"The price is 62.5₴. Deadline is on June 04 Fri, at 16:00"}
    ${4} | ${6}  | ${21} | ${45}   | ${1300} | ${"eng"} | ${"txt"}  | ${"The price is 187.2₴. Deadline is on June 07 Mon, at 15:45"}
    ${5} | ${6}  | ${13} | ${0}    | ${5100} | ${"ru"}  | ${"docx"} | ${"The price is 255₴. Deadline is on June 07 Mon, at 14:00"}
    ${6} | ${6}  | ${9}  | ${20}   | ${5100} | ${"ua"}  | ${"txt"}  | ${"The price is 306₴. Deadline is on June 07 Mon, at 15:20"}
    ${7} | ${6}  | ${12} | ${15}   | ${5100} | ${"eng"} | ${"rtf"}  | ${"The price is 612₴. Deadline is on June 08 Tue, at 19:15"}
  `(
    "countPrice__table",
    ({ day, month, hours, minutes, length, language, format, result }) => {
      expect(
        calculatePriceAndDeadline(
          day,
          month,
          hours,
          minutes,
          length,
          language,
          format
        )
      ).toBe(result);
    }
  );
});
