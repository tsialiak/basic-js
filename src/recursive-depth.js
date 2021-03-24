const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0, depth = 0;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        depth = this.calculateDepth(elem);
      }
      if (maxDepth < depth) maxDepth = depth;
    });
  
    return maxDepth + 1;
  }
};