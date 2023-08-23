const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    li.appendChild(checkBox);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    checkBox.addEventListener("change", (event) => {
        li.classList.toggle('complete');
        if (checkBox.checked) {
            span.style.textDecorationLine = "line-through";
        } else {
            span.style.textDecorationLine = "none";
        }
    });

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    
    
}