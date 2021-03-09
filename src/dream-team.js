const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const nameTeam = members.reduce((acc, elem) => {
      return typeof elem === "string" ?
        acc + elem.trim().slice(0, 1).toUpperCase() :
        acc;
      }
    , "");

    return nameTeam.split("").sort().join("");
  } else {
    return false;
  }
};
