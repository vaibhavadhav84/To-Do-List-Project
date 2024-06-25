document.addEventListener('DOMContentLoaded',() => {
    const addTaskInput=document.getElementById('addTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const addTask = () =>{
        const taskText = taskInput.value.trim();
        if(taskText != ''){
            const li=document.createElement('li');
            li.textContent=taskText;
            const deleteButton=document.createElement('span');
            deleteButton.textContent='x';
            deleteButton.classList.add('delete');
            deleteButton.onclick= () => li remove();
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value='';
        }
    };
    addTaskButton.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            addTask();
        }
    });
});