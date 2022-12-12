const numberOfItem = document.querySelectorAll('li.item');
const numberOfCategories = 'Number ' + 'of' + ' categories: ' + numberOfItem.length;
console.log(numberOfCategories);

const categories = document.querySelectorAll("h2");

numberOfItem.forEach((categories) => {
    const categoryName = categories.firstElementChild;
    console.log('Category: ', categoryName.textContent);
    const itemsNumber = categoryName.nextElementSibling.children;
    console.log('Elements: ', itemsNumber.length);
});

