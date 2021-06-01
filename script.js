"use strict";

var moment = require("moment"); // require

function calculatePriceAndDeadline(length, language, format) {
  let output = "";
  if (format === "doc" || format === "rtf" || format === "docx") {
    // console.log(`The price is ${countPrice(length, language) * 1}₴`);
    // output = `The price is ${countPrice(length, language) * 1}₴`
    const time = countDeadline(length, language);
    const deadlineDate = findDeadline(1, 6, 10, 0, time);
    console.log(deadlineDate.format("MMMM DD ddd, HH:mm a"));
  } else {
    // console.log(`The price is ${countPrice(length, language) * 1.2}₴`);
    // output = `The price is ${countPrice(length, language) * 1.2}₴`
    const time = countDeadline(length, language) * 1.2;
    console.log(time);
  }
  // return output;
}

const countPrice = function (length, language) {
  let price;
  if (language === "eng") {
    if (length <= 1000) {
      price = 120;
    } else {
      price = (length * 0.12).toFixed(2);
    }
  } else if (language === "rus" || "ua") {
    if (length <= 1000) {
      price = 50;
    } else {
      price = (length * 0.05).toFixed(2);
    }
  }
  return price;
};

const countDeadline = function (length, language) {
  let time;
  if (language === "eng") {
    if (length <= 333) {
      time = 1;
    } else {
      time = (0.5 + length / 333).toFixed(0);
    }
  } else if (language === "rus" || "ua") {
    if (length <= 1333) {
      time = 1;
    } else {
      time = (0.5 + length / 1333).toFixed(0);
    }
  }
  return time;
};

const findDeadline = function (day, month, hours, minutes, time) {
  let startDate = moment([2021, month - 1, day, hours, minutes]);
  console.log(startDate.format("MMMM DD ddd, h:mm:ss a"));
  let currentHours = parseInt(startDate.format("HH"), 10);
  let currentDay = startDate.format("ddd");
  for (let i = 1; i <= time; i++) {
    currentHours = parseInt(startDate.format("HH"), 10);
    currentDay = startDate.format("ddd");
    if (currentHours >= 19) {
      startDate.add(15 - (currentHours - 19), "hours");
    } else if (currentDay === "Sat") {
      currentHours = 10;
      startDate.add(2, "days");
    } else if (currentDay === "Sun") {
      currentHours = 10;
      startDate.add(1, "days");
    } else {
      startDate.add(1, "hours");
    }
  }
  const deadlineDate = startDate;
  return deadlineDate;
};

calculatePriceAndDeadline(2000, "eng", "rtf");
// console.log(moment().format());

// const deadline = moment([2021, 4, 31, 21]).add(5.8, 'h');
// console.log(deadline.format('MMMM Do YYYY, h:mm:ss a'));

// findDeadline(30, 5, 17, 30, 5);

module.exports = calculatePriceAndDeadline;
