export const silo = [];

export const stack = () => {
  return {
    push: (crop) => {
      silo.push(crop);
    },
    pop: () => {
      return silo.shift();
    },
    peek: () => {
      return silo[silo.length - 1].type;
    },
    isEmpty: () => {
      return silo.length == 0;
    },
    length: () => {
      return silo.length;
    },
  };
};
