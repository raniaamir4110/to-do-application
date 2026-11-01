let addTask = document.getElementById("addTaskButton");
let task = document.getElementById("taskInput");
let list = document.getElementById("taskList");
let editElement = null;

addTask.addEventListener("click", () => {
    // console.log(task.value)

    let todo = addTask.value.trim();

    if (todo == "") {
        alert("Please enter a task!");

    }
    else {
        list.innerHTML += `
        <div id ="main">
            <li>${task.value} </li>
            <div class="buttons">
                <button class="edit" onclick="editTask(event)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        </div>`;
        task.value = "";
    } 
    
    
});


const editTask = (event) => {
    let updatedtask = event.target.parentNode.parentNode.children[0].innerHTML;
    task.value = updatedtask;
    addTaskButton.innerHTML = "save";

    // console.log(updatedtask);
}

function deleteTask(element) {
    element.parentNode.parentNode.remove();
}

