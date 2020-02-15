var socket = io.connect('http://localhost:3000');

var taskTitle = document.getElementById('title'),
    taskBody = document.getElementById('task'),
    toDoList = document.getElementById('toDoList'),
    addTask = document.getElementById('submit'),
    toDoForm = document.getElementById('toDoForm');

    addTask.addEventListener('click', function(e){

        e.preventDefault();
        socket.emit('to do list',{
            title: taskTitle.value,
            task: taskBody.value
        });

        toDoForm.reset();
    });

    //Event Listener
    socket.on('to do list', function(data){
        console.log(data);
        toDoList.innerHTML += '<div class="task-container"><div class="task-title">' + data.title + '</div>' +'<div class="task-body">' + data.task + '</div></div>';
        console.log(toDoList.innerHTML);
    });