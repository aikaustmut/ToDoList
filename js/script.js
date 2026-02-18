document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Task tidak boleh kosong!");
        return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Bagian kiri (checkbox + text)
    let leftDiv = document.createElement("div");
    leftDiv.className = "d-flex align-items-center gap-2";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    let span = document.createElement("span");
    span.innerText = taskText;

    let statusBadge = document.createElement("span");
    statusBadge.className = "badge bg-secondary";
    statusBadge.innerText = "Pending";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.classList.add("completed-text");
            statusBadge.className = "badge bg-success";
            statusBadge.innerText = "Done";
        } else {
            span.classList.remove("completed-text");
            statusBadge.className = "badge bg-secondary";
            statusBadge.innerText = "Pending";
        }
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);
    leftDiv.appendChild(statusBadge);

    // Bagian kanan (edit + delete)
    let rightDiv = document.createElement("div");

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-2";
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", function () {
        let newTask = prompt("Edit task:", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask;
        }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    rightDiv.appendChild(editBtn);
    rightDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
