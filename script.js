"use strict";

var moment = require("moment"); // require

function calculatePriceAndDeadline(
  day,
  month,
  hours,
  minutes,
  length,
  language,
  format
) {
  let output = "";
  if (format === "doc" || format === "rtf" || format === "docx") {
    const time = countDeadline(length, language);
    console.log(time);
    const deadlineDate = findDeadline(day, month, hours, minutes, time);
    output = `The price is ${
      countPrice(length, language) * 1
    }₴. Deadline is on ${deadlineDate}`;
    console.log(output);
  } else {
    const time = (countDeadline(length, language) * 1.2).toFixed(0);
    console.log(time);
    const deadlineDate = findDeadline(day, month, hours, minutes, time);
    output = `The price is ${
      countPrice(length, language) * 1.2
    }₴. Deadline is on ${deadlineDate}`;
    console.log(output);
  }
  return output;
}

const countPrice = function (length, language) {
  let price;
  if (length > 0) {
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
  } else {
    price = 0;
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
  } else {
    time = 0;
  }
  return time;
};

const findDeadline = function (day, month, hours, minutes, time) {
  let startDate = moment([2021, month - 1, day, hours, minutes]);
  console.log(startDate.format("MMMM DD ddd, h:mm:ss a"));
  let currentHours = parseInt(startDate.format("HH"), 10);
  let currentDay = startDate.format("ddd");
  console.log(time);
  for (let i = 1; i <= time; i++) {
    currentHours = parseInt(startDate.format("HH"), 10);
    currentDay = startDate.format("ddd");
    if (
      currentHours >= 19 &&
      currentDay != "Sat" &&
      currentDay != "Sun" &&
      currentDay != "Fri"
    ) {
      startDate.add(15 - (currentHours - 19) + 1, "hours");
    } else if (currentDay === "Sat" && currentHours <= 19) {
      startDate.add(48 - (currentHours - 10) + 1, "hours");
    } else if (currentDay === "Fri" && currentHours >= 19) {
      startDate.add(72 - (currentHours - 10) + 1, "hours");
    } else if (currentDay === "Fri" && currentHours >= 18) {
      startDate.add(72 - (currentHours - 10), "hours");
    } else if (currentDay === "Sun" && currentHours <= 19) {
      startDate.add(24 - (currentHours - 10) + 1, "hours");
    } else {
      startDate.add(1, "hours");
    }
  }
  const deadlineDate = startDate.format("MMMM DD ddd, [at] HH:mm");
  return deadlineDate;
};

calculatePriceAndDeadline(7, 6, 12, 15, 5100, "eng", "rtf");

module.exports = calculatePriceAndDeadline;
