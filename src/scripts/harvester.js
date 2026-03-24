let seedArray = [];

export const harvestPlants = (plants) => {
  for (const plant of plants) {
    let idNumber = 1;
    if (plant.type == "Corn") {
      for (let i = 0; i < plant.output / 2; i++) {
        plant.id = idNumber;
        idNumber++;
        seedArray.push(plant);
      }
    } else {
      for (let i = 0; i < plant.output; i++) {
        plant.id = idNumber;
        idNumber++;
        seedArray.push(plant);
      }
    }
  }
  return seedArray;
};
