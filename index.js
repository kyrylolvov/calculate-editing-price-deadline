const fs = require("fs");

const input = "";
const inputLang = "eng";
let inputLength = 0;
let inputType = "";

const getFileLengthExtension = function (filename) {
  // Getting file extension
  var i = filename.lastIndexOf(".");
  inputType = i < 0 ? "" : filename.substr(i);

  // Getting file text and length
  fs.readFile(`${filename}`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    inputLength = countLength(data);
    if (inputType === ".doc" || inputType === ".rtf" || inputType === ".docx") {
    console.log(`The price is ${countPrice(inputLength, inputLang)}₴`);
    }
    else {
          console.log(`The price is ${countPrice(inputLength, inputLang) * 1.2}₴`);
    }
  });
};

const countLength = function (text) {
  // Counting length of a string
  const length = text.length;
  return length;
};

const countPrice = function (length, language) {
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

try {
  if (fs.existsSync(input)) {
    getFileLengthExtension(input);
  } else {
    if (input === ""){
      console.log("The price is 0₴");
    }
    else {
    console.log(`The price is ${countPrice(countLength(input), inputLang) * 1.2}₴`); 
    }
  }
} catch (err) {}