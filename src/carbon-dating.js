const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity ||
      typeof sampleActivity !== "string" || 
      Number.isNaN(Number(sampleActivity))) {
    return false;
  }

  const numSamplyActivity = Number(sampleActivity);
  if (numSamplyActivity > MODERN_ACTIVITY || numSamplyActivity <= 0) return false;

  const activity = MODERN_ACTIVITY / numSamplyActivity;
  const k = Math.LN2 / HALF_LIFE_PERIOD; 
  const t = Math.log(activity) / k;
  return Math.ceil(t);
};

