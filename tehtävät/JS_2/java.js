let tasks = [];

function addTask() {
    const name = document.getElementById("task-name").value;
    const priority = parseInt(document.getElementById("task-priority").value);
    const dueDate = document.getElementById("task-due-date").value;
    const status = "Kesken"; // Initial status

    if (!name || !priority || !dueDate) {
        alert("Task Name, Priority, and Due Date are required!");
        return;
    }

    const today = new Date();
    const selectedDate = new Date(dueDate);

    if (selectedDate < today) {
        alert("Due Date cannot be in the past!");
        return;
    }

    if (priority < 1 || priority > 5) {
        alert("Priority must be between 1 and 5!");
        return;
    }

    const task = {
        nro: tasks.length + 1,
        name: name,
        priority: priority,
        dueDate: dueDate,
        status: status,
    };

    tasks.push(task);
    updateTaskTable();
}

function updateTaskTable() {
    const tableBody = document.getElementById("task-table-body");
    tableBody.innerHTML = "";

    for (const task of tasks) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${task.nro}</td>
                         <td>${task.name}</td>
                         <td>${task.priority}</td>
                         <td>${task.dueDate}</td>
                         <td>${task.status}</td>`;

        if (task.status === "Valmis") {
            row.classList.add("completed");
        }

        tableBody.appendChild(row);
    }
}

function sortTasks() {
    const sortBy = document.getElementById("sort-select").value;

    tasks.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    updateTaskTable();
}

updateTaskTable();
