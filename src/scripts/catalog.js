export const catalog = (food) => {
  let foodHTML = ``;
  for (const item of food) {
    foodHTML += `<section class="plant">${item.emoji}</section>`;
  }
  const foodArea = document.querySelector(".container");
  if (foodArea) {
    console.log("works");
  } else {
    console.log("dont work");
  }
  foodArea.innerHTML = foodHTML;
};
