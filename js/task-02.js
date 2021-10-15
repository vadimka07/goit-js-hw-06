const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const result = ingredients.map((ingredient) => {
    const listElement = document.createElement('li');
    listElement.classList.add('item');
    listElement.textContent = ingredient;
    return listElement;
})
ingredientsList.append(...result);

//Вариант 2
// const ingredientsList = document.getElementById('ingredients');
// const fragmentDoc = new DocumentFragment();
// const result = ingredients.map((ingredient) => {
//     const listElement = document.createElement('li');
//     listElement.classList.add('item');
//     listElement.textContent = ingredient;
//     fragmentDoc.append(listElement);
//     return fragmentDoc;
// })
// ingredientsList.append(...result);