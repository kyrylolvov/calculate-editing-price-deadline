const countPrice = require("./script.js");
const countDeadline = require("./script.js");
const findDeadline = require("./script.js");
const calculatePriceAndDeadline = require("./script.js");

// All Passed!

// describe("countPrice", () => {
//   test.each`
//     length  | language | result
//     ${1500} | ${"ru"}  | ${"75.00"}
//     ${1500} | ${"ua"}  | ${"75.00"}
//     ${1500} | ${"eng"} | ${"180.00"}
//     ${5000} | ${"ru"}  | ${"250.00"}
//     ${5000} | ${"ua"}  | ${"250.00"}
//     ${5000} | ${"eng"} | ${"600.00"}
//   `("countPrice__table", ({ length, language, result }) => {
//     expect(countPrice(length, language)).toBe(result);
//   });
// });

// All Passed!

// describe("countDeadline", () => {
//   test.each`
//     length  | language | result
//     ${1500} | ${"ru"}  | ${"2"}
//     ${1500} | ${"ua"}  | ${"2"}
//     ${1500} | ${"eng"} | ${"5"}
//     ${5000} | ${"ru"}  | ${"4"}
//     ${5000} | ${"ua"}  | ${"4"}
//     ${5000} | ${"eng"} | ${"16"}
//   `("countPrice__table", ({ length, language, result }) => {
//     expect(countDeadline(length, language)).toBe(result);
//   });
// });

describe("findDeadline", () => {
  test.each`
    day  | month | hours | minutes | time | result
    ${4} | ${6}  | ${18} | ${30}   | ${3} | ${"June 07 Mon, at 12:30"}
    ${4} | ${6}  | ${15} | ${0}    | ${3} | ${"June 04 Fri, at 18:00"}
    ${4} | ${6}  | ${21} | ${45}   | ${3} | ${"June 07 Mon, at 13:45"}
    ${5} | ${6}  | ${13} | ${0}    | ${5} | ${"June 07 Mon, at 15:00"}
    ${6} | ${6}  | ${9}  | ${20}   | ${5} | ${"June 07 Mon, at 15:20"}
    ${7} | ${6}  | ${12} | ${15}   | ${5} | ${"June 07 Mon, at 17:15"}
  `("countPrice__table", ({ day, month, hours, minutes, time, result }) => {
    expect(findDeadline(day, month, hours, minutes, time)).toBe(result);
  });
});
