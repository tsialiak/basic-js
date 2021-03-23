const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const flatArr = arr.filter(elem => Array.isArray(elem) === true).flat(1);
    if (flatArr.length) {
      return 1 + (this.calculateDepth(flatArr);
    } else {
      return 1;
    }
  }
};