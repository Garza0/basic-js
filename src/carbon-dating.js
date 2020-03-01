const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string' || !parseFloat(sampleActivity) || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) < 0) return false

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)

};
