console.log("Welcome to the main module");

import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";
import { stack, silo } from "./siloStack.js";
import { cropProcessing, farmStore } from "./processingFacility.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const test1 = usePlants();
const harvestArray = harvestPlants(test1);

const barn = stack();
for (const crop of harvestArray) {
  barn.push(crop);
}
catalog(harvestArray);
cropProcessing(barn);
console.log(barn.isEmpty());
console.log(farmStore);
console.log(silo);

