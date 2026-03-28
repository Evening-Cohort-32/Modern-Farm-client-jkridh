export const silo = [];

export const stack = () => {
  return {
    push: (crop) => {
      silo.push(crop);
    },
    pop: () => {
      silo.pop();
    },
    peek: () => {
      return silo[silo.length - 1].type;
    },
    isEmpty: () => {
      return silo.length == 0;
    },
  };
};
