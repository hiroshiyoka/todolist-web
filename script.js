var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed) {
        toDoItem.classList.add("Completed!");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if(this.classList.contains("Completed!")) {
        this.classList.remove("Completed!");
    } else {
        this.classList.add("Completed!");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("Completed!");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItem = toDoList.children;
    while (toDoItem.length > 0) {
        toDoItem.item(0).remove();
    }
}

var myArray = [];
myArray.push("Something to store");
myArray.push("Something else to store");
alert(myArray(0));

var toDoInfo = {
    "task": "Thing i need to do",
    "Completed": false
};

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "Completed": toDo.classList.contains("Completed!")
        };

        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("Entry here")
}

function loadList() {
    if(localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();