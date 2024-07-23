const categoriesList = document.querySelector('#categories');
const categoriesItemsValue = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemsValue.length}`);

categoriesItemsValue.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsValue = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsValue}`);
});
