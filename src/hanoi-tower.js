const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (2 ** disksNumber) - 1;
  const turnsPerSecond = turnsSpeed / 3600;
  const seconds = Math.floor(turns / turnsPerSecond);

  return { "turns": turns, "seconds": seconds };
};
