```mermaid
sequenceDiagram;
    participant main.js
    participant plan.js
    participant field.js
    participant tractor.js
    participant harvester.js
    participant catalog.js
    participant seeds@{ "type" : "collections" }

note over seeds: contains soybean.js, corn.js, sunflower.js, asparagus.js, wheat.js, potato.js

plan.js -->> main.js: Import createPlan()
field.js -->> main.js: Import usePlants()
tractor.js -->> main.js: Import plantSeeds()
harvester.js -->> main.js: Import harvestPlants()
catalog.js -->> main.js: Import catalog()

main.js ->> plan.js: Invokes createPlan()
plan.js -->> main.js: Returns array for each row of crops and is assigned to variable yearlyPlan

main.js ->> tractor.js: Invokes plantSeeds() with yearlyPlan as the argument
loop For every plant in the yearlyPlan
   tractor.js --> seeds: Checks plant name and invokes the addPlant() function and uses correlated createPlant function from the seeds director as the argument.
   tractor.js -->> field.js: addPlant() function takes the created plant and adds it to the plantsInField[].
end

main.js ->> field.js: Invokes the usePlant() function
field.js -->> main.js: Returns a structured clone of the plantsInField[] array

loop For each plant object in the array the output key number value is checked. Then that number of the plant object is pushed to the seedArray[].
main.js ->> harvester.js: Invokes harvestPlants() with the array of the plants in the field as the argument. 
end
harvester.js -->> main.js: Returns the seedArray[] and assigns it to the variable harvestArray

loop For each item of food in the array HTML text is created and added to the foodHTML variable. The DOM innerHTML is then updated with the foodHTML string. 
main.js->>catalog.js: Invokes the catalog() function and passes harvestArray as the argument
end