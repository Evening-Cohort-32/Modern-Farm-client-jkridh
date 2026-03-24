let plantsInField = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    for (const obj of seed) {
      plantsInField.push(obj);
    }
  } else {
    plantsInField.push(seed);
  }
};

export const usePlants = () => {
  return structuredClone(plantsInField);
};
