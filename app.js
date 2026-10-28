let addTask = document.getElementById("addTaskButton");
let task = document.getElementById("taskInput");
let list = document.getElementById("taskList");


addTask.addEventListener("click", () => {
    // console.log(task.value)

    list.innerHTML += `<div class="main">
    <li>${task.value} </li>
    <button class="edit" onclick="editTask(this)">Edit</button> 
    <button class="delete" onclick="deleteTask(this)">Delete</button></div>`;
    task.value = "";
});
function editTask(element) {
let taskItem = element.parentNode.querySelector("li");

if (taskItem === null) {
    console.log("Task item not found!");
    return;
}

let newTask = prompt("Enter your updated task:", taskItem.innerText);

if (newTask !== null && newTask.trim() !== "") {
    taskItem.innerText = newTask.trim();
}

}
function deleteTask(element) {
    element.parentNode.remove();
}

// function edit(element) {
//     element.addEventListener("click", () => {
//         task.value = element.parentNode.parentNode.firstChild.innerHTML;
//     })
// }