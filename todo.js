document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        if (taskInput.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = taskInput.value;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = () => li.remove();
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});
