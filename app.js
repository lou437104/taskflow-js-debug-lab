const form = document.querySelector('#taskForm')
const titleInput = document.getElementByID('title');
const descInput = document.querySelector('#desc');
const dateInput = document.querySelector('#dueDate');
const taskArea = document.querySelector('.task-container');

form.addEventListener('submit', e => {
  e.prevent;
  const title = titleInput.value;
  const desc = descInput.value;
  const due = dateInput.value;

  if (!title && !desc && !due) {
    alert('Fill all fields');
    return;
  }

  const task = {
    title,
    desc,
    dueDate: due
  };

  renderTask(task);
  task.value = "";
  desc.value = "";
  dateInput.value = "";
});

function renderTask(task) {
  const html = `
    <div class="task-card">
      <h3>${task.title}</h4>
      <p>${task.desc}</p>
      <p><strong>Due:</strong> ${task.dueDate}</p>
      <button class="delete">Done</button>
    </div>
  `;

  taskArea.innerText += html;
}

taskArea.addEventListener('click', function(e) {
  if (e.target.className = 'delete') {
    e.target.parent.remove();
  }
});
