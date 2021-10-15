const listCategories = document.getElementById('categories');
const childElements = [...listCategories.children]
console.log('Number of categories:', childElements.length)

childElements.forEach(( element ) => {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements', element.querySelectorAll('ul li').length)

})