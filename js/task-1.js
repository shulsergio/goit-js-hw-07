const checkLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${checkLi.length}`);

const allLi = document.querySelectorAll(".item");
items.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const itemLi = item.querySelectorAll("ul li");
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${itemLi.length}`);
});
