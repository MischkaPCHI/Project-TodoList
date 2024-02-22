let todoList = [
    {task: "Купить молоко", done: false, deadline: "2024-02-23"},
    {task: "Заплатить за интернет", done: true, deadline: "2024-02-20"},
    {task: "Позвонить маме", done: false, deadline: "2024-02-22"},
    {task: "Почитать книгу", done: false, deadline: "2024-02-28"},
    {task: "Сделать домашнее задание", done: true, deadline: "2024-02-21"},
    {task: "Посмотреть фильм", done: false, deadline: "2024-02-24"},
    {task: "Помыть посуду", done: true, deadline: "2024-02-22"},
    {task: "Погулять с собакой", done: false, deadline: "2024-02-23"},
    {task: "Заказать пиццу", done: false, deadline: "2024-02-25"},
    {task: "Посетить врача", done: true, deadline: "2024-02-20"},
    {task: "Починить компьютер", done: false, deadline: "2024-02-26"},
    {task: "Подарить цветы подруге", done: true, deadline: "2024-02-21"},
    {task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27"},
    {task: "Послать резюме", done: true, deadline: "2024-02-20"},
    {task: "Поехать в отпуск", done: false, deadline: "2024-02-29"}
];

const listObject = document.querySelector('.list');
const all = document.querySelector('#all');
const completed = document.querySelector('#completed');
const notCompleted = document.querySelector('#not_completed');

const listItemHandler = (evt) => {
    evt.target.classList.toggle('list-item_done');
};

const inputElement = document.querySelector('.task-input');
const createButton = document.querySelector('.btn');
let userInputText;

const createButtonHandler = (object) => {
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = object['task'];
        if(object['done'] === true){
            newListItem.classList.add('list-item_done');
        }
    const listAllElements = document.querySelector('.list');
    listAllElements.append(newListItem);
}

todoList.forEach(createButtonHandler);

const createButtonHandler2 = () => {
    const newTask = {task: userInputText , done: false};
    todoList.push(newTask);
    controllList(todoList);
}

const listItemClickHandler = (event) => {
    const taskText = event.target.textContent;
    const task = todoList.find(task => task.task === taskText);
    task.done = !task.done;
    controllList(todoList);
}

const controllList = (list) =>{
    listObject.innerHTML = '';
    list.forEach(task => {
        const newListItem = document.createElement('li');
        newListItem.classList.add('list-item');
        newListItem.textContent = task['task'];
            if(task['done']){
                newListItem.classList.add('list-item_done');
            }
        newListItem.addEventListener('click', listItemClickHandler);
        listObject.append(newListItem);
    });
}

const inputHandler = () => {
    userInputText = inputElement.value;
}

listObject.addEventListener('click', listItemHandler);
createButton.addEventListener('click', createButtonHandler2);
inputElement.addEventListener('input', inputHandler);

all.addEventListener('click', () => controllList(todoList));
completed.addEventListener('click', () => controllList(todoList.filter(task => task.done)));
notCompleted.addEventListener('click', () => controllList(todoList.filter(task => !task.done)));

console.log(todoList);
