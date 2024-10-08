
const form = document.querySelector("#todoAddForm");
const todo = document.querySelector("#todoName");
const todoContent = document.querySelector("#todoContent");
const todoList = document.querySelector(".list-group");
const button = document.querySelector("#todoAddButton");
const cardBody2 = document.querySelectorAll(".card")[1];
const searchClearbtn = document.querySelector("#searchClearBtn");
const searchName = document.querySelector("#searchName");

let todos = [];

runEvents();

function runEvents() {
    button.addEventListener("click", addTodo);
    document.addEventListener("DOMContentLoaded", sayfayukleme);
    cardBody2.addEventListener("click", removetodo);   
    searchClearbtn.addEventListener("click", removeSearch);
    searchName.addEventListener("keyup", searchTodo);
}

function addTodo(e) {
    const todoName = todo.value.trim();
    const content = todoContent.value.trim();

    if(todoName == null || todoName == "") {
        console.log("Todo ismi giriniz...");

    }
    else {
        // Görevi ekran gösterme
        addTodotoUI(todoName, content);
        // Görevi LocalStorage'e ekleme
        addTodotoLocal(todoName, content);
    }

    e.preventDefault();
}


function addTodotoUI(x, y){

    /* <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    Subheading
                </div>
                <p> Content for list item </p>
            </div>
            ! <button type="button" class="btn-close" aria-label="Close"></button>
        </li> */

    let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-start";
    
    let div1 = document.createElement("div");
        div1.className = "ms-2 me-auto";
    
    let div2 = document.createElement("div");
        div2.className = "fw-bold";
        div2.textContent = x;
    
    let p = document.createElement("p");
        p.textContent = y;
        p.className = "todoAciklamalari";
    
    let button = document.createElement("button");
        button.type = "button";
        button.className = "btn-close todoClear";
    
    div1.appendChild(div2);
    div1.appendChild(p);

    li.appendChild(div1);
    li.appendChild(button);

    todoList.appendChild(li);
}


function addTodotoLocal(x, y) {
    localKontrol();

    const todoNumber = todos.length + 1;
    const todoName = `todo${todoNumber}`;
    
    let todo = {
        id: todoName,  // Numaralandırılmış isim
        name: x, 
        content: y
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function localKontrol() {
    if (localStorage.getItem("todos") == null) todos= [];
    else{ todos = JSON.parse(localStorage.getItem("todos")); }
}

function sayfayukleme () {
    localKontrol();
    for(let i = 0; i < todos.length; i++)
    {
        addTodotoUI(todos[i].name, todos[i].content);
    }
}

function removetodo(e) {
    if(e.target.classList.contains("todoClear"))
    {
        const todo = e.target.parentElement;
        todo.remove();
    }

    removeTodoFromStorage(e.target.parentElement);
}

function removeTodoFromStorage(todoElement) {
    const removetodo = todoElement.children[0].children[0].textContent;

    localKontrol();

    todos.forEach(function(todo, index){
        if (todo.name == removetodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function searchTodo() {
    let searchText = searchName.value.toLowerCase().trim();

    const allTodos = document.querySelectorAll(".list-group-item");
    if(allTodos.length>0)
    {
        allTodos.forEach(todo=>{
            if(todo.children[0].children[0].textContent.toLowerCase().trim().includes(searchText))
            { 
                todo.setAttribute("style","display : block");
            }
            else todo.setAttribute("style","display : none !important");
        });
    }
    
}

function removeSearch() {
    const allTodos = document.querySelectorAll(".list-group-item");

    if(allTodos.length>0)
    {
        allTodos.forEach(todo=>{
            todo.setAttribute("style","display : block");
        });
    }

    searchName.value = "";

}
