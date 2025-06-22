

/*const form = document.getElementById('todo-form');
const input = document.getElementById('newTask');
const list = document.getElementById('taskList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'gray';
    } else {
      span.style.textDecoration = 'none';
      span.style.color = '#3498db';
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  list.appendChild(li);

  input.value = '';
});

function updateDate() {
  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  document.getElementById("dayOfWeek").textContent = days[date.getDay()];
  document.getElementById("dateString").textContent = date.toLocaleDateString(undefined, options);
}

window.onload = () => {
  updateDate();
  loadTasks();
};

taskText.style.wordBreak = "break-word";
  taskText.style.flex = "1";


function addTask() {
    const newTask = document.getElementById("newTask").value;
    if (!newTask.trim()) return;
  
    fetch('save_task.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'task=' + encodeURIComponent(newTask)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        loadTasks();
        document.getElementById("newTask").value = '';
      }
    });
  }
  
  /*function loadTasks() {
    fetch('get_tasks.php')
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("taskList");
        list.innerHTML = '';
        data.forEach(task => {
          const li = document.createElement("li");
          li.innerHTML = `<input type="checkbox" ${task.is_done ? 'checked' : ''}> ${task.task}`;
          list.appendChild(li);
        });
      });
  }

  
  window.onload = loadTasks;

  /*function updateDate() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    document.getElementById("dayOfWeek").textContent = days[date.getDay()];
    document.getElementById("dateString").textContent = date.toLocaleDateString(undefined, options);
  }
  
  window.onload = () => {
    updateDate();
    loadTasks();
  };*/

  



/*const form = document.getElementById('todo-form');
const input = document.getElementById('newTask');
const list = document.getElementById('taskList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  fetch('save_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'task=' + encodeURIComponent(taskText)
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      input.value = '';
      loadTasks();
    }
  });
});

function loadTasks() {
  fetch('get_tasks.php')
    .then(res => res.json())
    .then(data => {
      list.innerHTML = '';
      data.forEach(task => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.is_done;
        checkbox.addEventListener('change', () => {
          updateTask(task.id, checkbox.checked);
        });

        const span = document.createElement('span');
        span.textContent = task.task;
        span.style.flex = '1';
        if (task.is_done) {
          span.style.textDecoration = 'line-through';
          span.style.color = 'gray';
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = () => deleteTask(task.id);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    });
}

/*function updateTask(id, is_done) {
  fetch('update_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `id=${id}&is_done=${is_done ? 1 : 0}`
  }).then(() => loadTasks());
}

function deleteTask(id) {
  fetch('delete_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `id=${id}`
  }).then(() => loadTasks());
}

function updateDate() {
  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  document.getElementById("dayOfWeek").textContent = days[date.getDay()];
  document.getElementById("dateString").textContent = date.toLocaleDateString(undefined, options);
}

window.onload = () => {
  updateDate();
  loadTasks();
 };*/