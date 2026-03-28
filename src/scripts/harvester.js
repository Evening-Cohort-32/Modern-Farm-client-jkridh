let seedArray = [];
let seedArrayId = []
let idNumber = 1;
export const harvestPlants = (plants) => {
  for (const plant of plants) {
    if (plant.type == "Corn") {
      for (let i = 0; i < plant.output / 2; i++) {
        seedArray.push(plant);
      }
    } else {
      for (let i = 0; i < plant.output; i++) {
        seedArray.push(plant);
      }
    }
  }
  //Adds ID to seed
  for (const seed of seedArray) {
    seedArrayId.push({
      ...seed,
      id: idNumber++
    })
  }
  return seedArrayId;
};
