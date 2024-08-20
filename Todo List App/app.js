
const form = document.querySelector("#todoAddForm");
const todo = document.querySelector("#todoName");
const todoContent = document.querySelector("#todoContent");
const todoList = document.querySelector(".list-group");
const button = document.querySelector("#todoAddButton");
const cardBody2 = document.querySelectorAll(".card")[1];

let todos = [];
let contents = [];

runEvents();

function runEvents() {
    button.addEventListener("click", addTodo);
    document.addEventListener("DOMContentLoaded", sayfayukleme);
    cardBody2.addEventListener("click", removetodo);   
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
        button.className = "btn-close";
    
    div1.appendChild(div2);
    div1.appendChild(p);

    li.appendChild(div1);
    li.appendChild(button);

    todoList.appendChild(li);
}


function addTodotoLocal(x, y) {
    localKontrol();
    todos.push(x);
    localStorage.setItem("todos", JSON.stringify(todos));
    contents.push(y);
    localStorage.setItem("contents", JSON.stringify(contents));
}

function localKontrol() {
    if (localStorage.getItem("todos") == null)  { todos = []; }
    else { todos = JSON.parse(localStorage.getItem("todos")); }

    if (localStorage.getItem("contents") == null) { contents = []; }
    else { contents = JSON.parse(localStorage.getItem("contents")); }
}

function sayfayukleme () {
    localKontrol();
    for(let i = 0; i < todos.length; i++)
    {
        addTodotoUI(todos[i], contents[i]);
    }
}

function removetodo(e) {
    if(e.target.className == "btn-close")
    {
        const todo = e.target.parentElement;
        todo.remove();
    }

    removeTodoFromStorage(e.target);
}

function removeTodoFromStorage(x) {
    const removetodo = x.previousElementSibling.children[0].textContent;
    const removecontent = x.previousElementSibling.children[1].textContent;

    localKontrol();

    todos.forEach(function(todo, index){
        if (todo == removetodo){
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

    contents.forEach(function(content, index){
        if(content == removecontent) {
            contents.splice(index,1);
        }
    });

    localStorage.setItem("contents", JSON.stringify(contents));


}
