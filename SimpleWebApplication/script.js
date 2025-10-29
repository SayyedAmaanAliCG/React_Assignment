let addForm = document.getElementsByClassName('add-task-form');
let addTaskBtn = document.getElementById('addTaskBtn');
let cancelBtn = document.getElementById('cancelTaskBtn');
let saveBtn = document.getElementById('saveTaskBtn');

let tableBody = document.getElementById('taskTableBody');

if(tableBody.rows.length === 0) {
    let noDataRow = document.createElement('tr');
    let noDataCell = document.createElement('td');
    noDataCell.colSpan = 3;
    noDataCell.textContent = "No tasks available";
    noDataRow.appendChild(noDataCell);
    noDataRow.classList.add('No-data-row');
    tableBody.appendChild(noDataRow);
}

addTaskBtn.addEventListener('click', function() {
    addForm[0].style.display = 'flex';
});

cancelBtn.addEventListener('click', function() {
    let errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'none';
    addForm[0].style.display = 'none';
    addForm[0].reset();
});

saveBtn.addEventListener('click', function() {
    let errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'none';
    let taskInput = document.getElementById('taskInput').value;
    let statusInput = document.getElementById('statusSelect').value;
    if (taskInput && statusInput) {
        let tableBody = document.getElementById('taskTableBody');
        let newRow = tableBody.insertRow();
        let taskCell = newRow.insertCell(0);
        let statusCell = newRow.insertCell(1);
        let actionCell = newRow.insertCell(2);
        taskCell.textContent = taskInput;
        statusCell.textContent = statusInput;
        actionCell.innerHTML = '<div class="action-btns"><button class="editBtn">edit</button><button class="deleteBtn">X</button></div>';
        addForm[0].style.display = 'none';
        let noDataRow = tableBody.querySelector('.No-data-row');
        if(noDataRow) {
            tableBody.removeChild(noDataRow);
        }
        addForm[0].reset();
    }else {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = 'block';
    }
});

document.getElementById('taskTableBody').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('deleteBtn')) {
        let row = e.target.closest('tr');
        row.parentNode.removeChild(row);
    }
    if (e.target && e.target.classList.contains('editBtn')) {
        let row = e.target.closest('tr');
        let task = row.cells[0].textContent;
        let status = row.cells[1].textContent;
        document.getElementById('taskInput').value = task;
        document.getElementById('statusSelect').value = status;
        addForm[0].style.display = 'block';
    }
});

