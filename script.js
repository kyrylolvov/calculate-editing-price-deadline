"use strict";

const fileInput = document.getElementById("inputfile");
const langInput = document.getElementById("lang");
const textInput = document.getElementById("inputtext");
const stringLanguage = "eng";
let fileText = "";
let fileType = "";
let inputLength = 0;

fileInput.addEventListener("change", function () {
  textInput.style.display = "none";
  var files = fileInput.files;
  const fileInfo = files[0].name.split(".");
  fileType = fileInfo[1];
  var fr = new FileReader();
  fr.onload = function () {
    fileText = fr.result;
    inputLength = countLength(fr.result);
    console.log(fileText);
    console.log(inputLength);
  };
  fr.readAsText(this.files[0]);
});

textInput.addEventListener("change", function () {
  fileInput.style.display = "none";
  inputLength = countLength(textInput.value);
  console.log(inputLength);
});

langInput.addEventListener("change", function () {
  const langValue = String(langInput.value);
  if (fileInput.style.display === "none") {
    console.log(`The price is ${countPriceText(inputLength, langValue) * 1.2}`);
  } else {
    {
      if (fileType === "doc" || fileType === "rtf" || fileType === "docx") {
        console.log(fileType);
        console.log(`The price is ${countPriceText(inputLength, langValue)}`);
      } else {
        console.log(
          `The price is ${countPriceText(inputLength, langValue) * 1.2}`
        );
      }
    }
  }
});

const countLength = function (text) {
  const length = text.length;
  return length;
};

const countPriceText = function (length, language) {
  let price = 0;
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
