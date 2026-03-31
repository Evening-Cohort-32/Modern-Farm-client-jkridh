export const queue = [];
export const farmStore = [];

const processor = () => {
  return {
    enqueue: (crop) => {
      queue.push(crop);
    },
    dequeue: () => {
      const firstElement = queue.shift();
      return firstElement;
    },
    next: () => {
      return queue[0].type;
    },
    last: () => {
      return queue[queue.length - 1].type;
    },
    isEmpty: () => {
      return queue.length == 0;
    },
    size: () => {
      return queue.length;
    },
  };
};

const conveyorBelt = processor();

const createFood = (item) => {
  switch (item) {
    case "Soybean":
      farmStore.push("Bean Paste");
      console.log("Bean Paste was created");
      break;
    case "Corn":
      farmStore.push("Corn Meal");
      console.log("Corn Meal was created");
      break;
    case "Sunflower":
      farmStore.push("Sunflower Oil");
      console.log("Sunflower Oil was created.");
      break;
    case "Asparagus":
      farmStore.push("Pickled Asparagus");
      console.log("Pickled Asparagus was created.");
      break;
    case "Wheat":
      farmStore.push("Flour");
      console.log("Flour was created.");
      break;
    case "Potato":
      farmStore.push("Potato chips");
      console.log("Potato Chips was created.");
      break;
    default:
      console.log("Whoopsie Daisy");
  }
};

export const cropProcessing = (barn) => {
  const condition = barn.length();
  console.log(barn.length());
  console.log(condition);
  conveyorBelt.enqueue(barn.pop());
  conveyorBelt.enqueue(barn.pop());
  conveyorBelt.enqueue(barn.pop());

  for (let i = 1; i <= condition; i++) {
    if (conveyorBelt.size() >= 2) {
      let currentItem = conveyorBelt.dequeue();

      createFood(currentItem.type);
    } else if (conveyorBelt.size() <= 1 && barn.isEmpty() != true) {
      conveyorBelt.enqueue(barn.pop());
      let currentItem = conveyorBelt.dequeue();
      createFood(currentItem.type);
    } else {
      let currentItem = conveyorBelt.dequeue();
      createFood(currentItem.type);
    }

    if (barn.isEmpty() === true && conveyorBelt.isEmpty() === true) {
      console.log(
        "Farm Store inventory is full and ready to open for business",
      );
    } else if (barn.isEmpty() === true) {
      console.log("Storage Barn is ready for new crops");
    }
  }
};
