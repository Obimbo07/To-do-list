import './style.css';

const tasks = [
  {
    index: '0',
    complete: true,
    description: 'bbbbbb',
  },
  {
    index: '1',
    complete: true,
    description: 'bbbbbb',
  },
];
function populateTaskList() {
  const taskSection = document.getElementById('task-section');
  taskSection.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskList = document.createElement('div');
    taskList.classList.add('lists');
    taskList.innerHTML = `
     <ul class="list-section">
       <li><input type="checkbox" ${task.complete ? 'checked' : ''}></li>
       <li>${task.description}</li>
       <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
     </ul>
     `;
    taskSection.appendChild(taskList);
  });
}

populateTaskList();

function submitTask() {
  const taskInput = document.getElementById('task-input');
  if (taskInput.value.trim() !== '') {
    const newTask = {
      description: taskInput.value,
      complete: false,
      index: tasks.length,
    };
    tasks.push(newTask);
    taskInput.value = '';
    populateTaskList();
  }
}

const taskInput = document.getElementById('task-input');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submitTask();
  }
});
