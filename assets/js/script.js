// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Function to generate a unique task id
function generateTaskId() {
    const idNum = Math.floor(Date.now() / 1000);
    console.log(idNum);
}

document.addEventListener('DOMContentLoaded', () => {
    // Adds the jQuery date picker
    $(function() {
      $("#dueDate").datepicker({
        dateFormat: "mm/dd/yy"
      });
    });
  
    const taskForm = document.getElementById('taskForm');
    // Adjust the selector based on where you want to append tasks
    const taskList = document.getElementById('todo-cards'); 
  
    // Function to handle form submission and add a new task
    document.getElementById('submitTaskBtn').addEventListener('click', (event) => {
      event.preventDefault();
  
      const title = document.getElementById('recipient-name').value;
      const description = document.getElementById('message-text').value;
      const dueDate = document.getElementById('dueDate').value;
  
      if (title && description && dueDate) {
        const task = {
          title,
          description,
          dueDate
        };
  
        const taskCard = createTaskCard(task);
        taskList.appendChild(taskCard);
  
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
        modal.hide();
  
        // Clear the form
        taskForm.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  
    // Function to create a task card
    function createTaskCard(task) {
      const taskCard = document.createElement('div');
      taskCard.className = 'task-card card mb-3';
  
      const taskCardBody = document.createElement('div');
      taskCardBody.className = 'card-body';
  
      const taskTitle = document.createElement('h5');
      taskTitle.className = 'task-title';
      taskTitle.textContent = task.title;
      taskCardBody.appendChild(taskTitle);
  
      const taskDescription = document.createElement('p');
      taskDescription.className = 'card-text';
      taskDescription.textContent = task.description;
      taskCardBody.appendChild(taskDescription);
  
      const taskDueDate = document.createElement('p');
      taskDueDate.className = 'card-text';
      taskDueDate.textContent = `${task.dueDate}`;
      taskCardBody.appendChild(taskDueDate);
  
      taskCard.appendChild(taskCardBody);

        // Check if the task is past due
    const currentDate = new Date().setHours(0, 0, 0, 0); 
    const taskDueDateObj = new Date(task.dueDate);

    console.log('Current Date:', currentDate);
    console.log('Task Due Date:', taskDueDateObj);

        // Changes the css styling if the task is due that day or past due.
    if (taskDueDateObj < currentDate) { 
        taskCard.classList.add('past-due');
        taskTitle.classList.add('past-due');
      } else if (taskDueDateObj == currentDate) {
        taskCard.classList.add('due-today');
        taskTitle.classList.add('due-today');
      }

      return taskCard;
    }
  });
  
  


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

