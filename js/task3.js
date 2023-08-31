/* Задание: Создание списка покупок
Создайте веб-страницу для списка покупок.
Пользователь должен иметь возможность ввести продукты в текстовое поле и добавить их в список.
По нажатию на кнопку "Добавить" введенный продукт должен быть добавлен к списку, отображаемому на странице.
Используйте localStorage, чтобы сохранять список покупок между посещениями страницы.*/
//======================================================================================================
const addProduct = document.getElementById('addProduct')
const btn = document.getElementById('btn')
const productsList = document.getElementById('list')
const products = []
btn.addEventListener('click', function(event) {
    event.preventDefault()
    let newProduct = addProduct.value
    products.push(newProduct)
    const productsForJSON = JSON.stringify(products);
    localStorage.setItem('product', productsForJSON);
    showList()
})
window.addEventListener('load', showList);

function showList () {
    const productsFromJSON = localStorage.getItem('product');
    const productsForList = JSON.parse(productsFromJSON);
    let show = ''
    for (let i = 0; i < productsForList.length; i++) {
        const productForList = productsForList[i];
        show += `
            <li>${productForList}</li>
        `
        list.innerHTML = show
    }
}

