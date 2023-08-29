/* Задание: Создание списка покупок
Создайте веб-страницу для списка покупок.
Пользователь должен иметь возможность ввести продукты в текстовое поле и добавить их в список.
По нажатию на кнопку "Добавить" введенный продукт должен быть добавлен к списку, отображаемому на странице.
Используйте localStorage, чтобы сохранять список покупок между посещениями страницы.*/
//======================================================================================================
const form = document.forms.form
const btn = document.getElementById('btn')
const list = document.getElementById('list')

function showList () {
    const nameFromJSON = localStorage.getItem('product');
    if (nameFromJSON) {
        const productForList = JSON.parse(nameFromJSON);
        if (productForList.product !== "") {
            const li = document.createElement('li')
            li.innerText = `${productForList.product}`;
            list.append(li)
        }
    }
}
window.addEventListener('load', showList);

function getProduct(event) {
    event.preventDefault();

    const {product} = form;
    const productName = {
        product: product.value
    };
    const productForJSON = JSON.stringify(productName);
    localStorage.setItem('product', productForJSON);
    showList()
}
form.addEventListener('submit', getProduct);
//======================================================================================================
