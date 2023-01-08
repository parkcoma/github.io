const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

let todos = []

const TODOS_KEY = "todos"

function removeTodo(event){
    const li = event.target.parentElement
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    li.remove()
    saveTodos()
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", removeTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleTodoSumbit(event){
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

todoForm.addEventListener("submit", handleTodoSumbit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos){
    const parseTodos = JSON.parse(savedTodos)
    todos = parseTodos
    parseTodos.forEach(paintTodo)
}