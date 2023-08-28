/* Задание: Сохранение имени пользователя
Создайте страницу, которая приветствует пользователя по имени.
При первом посещении пользователю будет предложено ввести свое имя.
После ввода имени страница должна сохранить его в localStorage.
При последующих посещениях страницы имя пользователя должно автоматически подставляться в приветствие.*/
//======================================================================================================
const greeting = document.getElementById('greeting')
function showGreeting() {
    const nameFromJSON = localStorage.getItem('name');
    if (nameFromJSON) {
        const nameAlert = JSON.parse(nameFromJSON);
        if (nameAlert.name !== "") {
            greeting.innerHTML = `
            <h1>Привет, ${nameAlert.name}!</h1>
            `;
        }
    }
}
window.addEventListener('load', showGreeting);


const formName = document.forms.formName;
function getName(event) {
    event.preventDefault();

    const { name } = formName;
    const nameValue = {
        name: name.value
    };
    const nameForJSON = JSON.stringify(nameValue);
    localStorage.setItem('name', nameForJSON);
    showGreeting();
}
formName.addEventListener('submit', getName);
//=====================================================================================================