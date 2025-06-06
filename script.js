function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = 'task' + (task.done ? ' done' : '');
    div.innerHTML = `<span>${task.text}</span>`;
    const btn = document.createElement('button');
    btn.textContent = task.done ? 'Undo' : 'Done';
    btn.onclick = () => toggleTask(index);
    div.appendChild(btn);
    list.appendChild(div);
  });
}

function addTask() {
  const input = document.getElementById('newTask');
  const text = input.value.trim();
  if (!text) return;
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.push({ text, done: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
  loadTasks();
}

function toggleTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks[index].done = !tasks[index].done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

window.onload = loadTasks;
