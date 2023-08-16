const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);
