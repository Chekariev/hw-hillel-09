'use strict';

const ToDoInput = document.querySelector("#ToDoInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const firstMsg = document.querySelector("#firstMsg");
const taskList = document.querySelector(".taskList");

addTaskBtn.addEventListener("click", addTaskBtnClick);

// функция обработчик на событие click для кнопки добавления новой задачи в список
function addTaskBtnClick() {
  if (ToDoInput.value) { // если текст в поле ввода введен 
    if (!firstMsg.hidden) firstMsg.hidden = true;

    const newTask = createTask(ToDoInput.value);
    taskList.append(newTask);
    ToDoInput.value = "";
} 
  else { // если поле ввода для имени задачи пустое
    alert("Value is empty. Please add task");
  }
}

// функция для создания новой задачи в списке, получает в качестве параметра текст задачи, возвращает DOM элемент
function createTask(text) {
  const div = document.createElement("div");
  div.classList.add("task");

  const input = document.createElement("input");
  input.addEventListener("click", changeTaskState); // устанавливаем обработчик на нажатие по checkbox - один и тот же для всех элементов
  input.type = "checkbox";

  const p = document.createElement("p");
  p.innerText = text;

  div.append(input);
  div.append(p);

  return div;
}

// функция обработчик, которая меняет статус выбранной задачи, используется как обработчик на событие click для checkbox
function changeTaskState() {
  if (this.checked) { // если нажатый chekbox с галочкой, то добавляем для родительского элемента класс completed
  this.parentElement.classList.add("completed");
} 
  else { // иначе убираем класс completed
    this.parentElement.classList.remove("completed");
  }
}


