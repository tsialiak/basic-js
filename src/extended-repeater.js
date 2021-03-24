const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.hasOwnProperty("separator")) options.separator = "+";
  if (!options.hasOwnProperty("additionSeparator")) options.additionSeparator = "|";

  if (options.hasOwnProperty("addition")) {
    str += repeatString(options.addition, options.additionSeparator, options.additionRepeatTimes);
  }
  return repeatString(str, options.separator, options.repeatTimes);
};

const repeatString = (str, separator, count) => {
  let strOut = str;
  for (let i = 1; i < count; i++) {
    strOut += separator + str;
  }
  return strOut;
}
  