const taskInput = document.querySelector('.tasks__input')
const taskList = document.querySelector('.tasks__list')
const taskControl = document.querySelector('.tasks__control')

taskControl.addEventListener('submit', (e) => {
    e.preventDefault()
    if (taskInput.value) {
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
      `
        taskInput.value = ''
    }

})

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
    }
});