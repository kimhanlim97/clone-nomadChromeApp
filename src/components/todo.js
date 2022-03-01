const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector(".todo-form__input");
const toDoList = document.querySelector(".todo-list")
const toDoListContentWrapper = document.querySelector('.todo-list__content-wrapper');

let toDos = []

export {toDoForm, toDoList, toDos}

export function todo() {
    const TODOS_KEY = "todos"

    function saveToDos() {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }

    function deleteToDo(event) {
        const li = event.target.parentElement
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
        saveToDos();
        li.remove();
    }

    function paintToDo(newToDoObj) {
        const li = document.createElement("li");
        li.id = newToDoObj.id
        li.className = "todo-list__list"
        const span = document.createElement("span");
        span.innerText = newToDoObj.text;
        span.className = "todo-list__list__text"
        const button = document.createElement("button")
        button.innerText = "X";
        button.className = "todo-list__list__delete"
        button.addEventListener("click", deleteToDo);
        
        li.appendChild(span);
        li.appendChild(button);
        
        toDoListContentWrapper.appendChild(li);
    }

    function handleToDoSubmit(event) {
        event.preventDefault();

        const newToDo = toDoInput.value;
        toDoInput.value = "";
        const newToDoObj = {
            text: newToDo,
            id: Date.now()
        }
        toDos.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY)

    if (savedToDos) {
        const parsedToDos = JSON.parse(savedToDos)
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}