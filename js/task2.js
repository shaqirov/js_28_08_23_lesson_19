/* Задание: Счетчик нажатий
Создайте веб-страницу с кнопкой "Увеличить счетчик".
При каждом нажатии на кнопку счетчик должен увеличиваться на единицу и новое значение счетчика должно отображаться на странице.
Используйте localStorage, чтобы счетчик сохранялся между посещениями страницы.*/
//=====================================================================================================
const btn = document.getElementById('btn')
const number = document.getElementById('number')
let num = localStorage.getItem('num')
if (!num) {
    num = 0
} 
number.textContent = num
btn.addEventListener('click', function () {
    num++
    number.textContent = num
    localStorage.setItem('num', num)
})
//=====================================================================================================