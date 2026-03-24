import {createSoybean} from "./seeds/soybean.js"
import {createCorn} from "./seeds/corn.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createWheat} from "./seeds/wheat.js"
import {createPotato} from "./seeds/potato.js"
import{addPlant} from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan){
        for(const plant of row) {
            if (plant == Soybean){
                addPlant(createSoybean())
            }
            else if(plant == Corn){
                addPlant(createCorn())
            }
            else if(plant == Sunflower){
                addPlant(createSunflower())
            }
            else if(plant == Asparagus){
                addPlant(createAsparagus())
            }
            else if(plant == Wheat){
                addPlant(createWheat())
            }
            else if(plant == Potato){
                addPlant(createPotato())
            }
        }
    }
}

