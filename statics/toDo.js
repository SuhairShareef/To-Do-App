var socket = io.connect('http://localhost:3000');

var taskTitle = document.getElementById('title'),
    taskBody = document.getElementById('task'),
    toDoList = document.getElementById('toDoList'),
    addTask = document.getElementById('submit'),
    toDoForm = document.getElementById('toDoForm');

    addTask.addEventListener('click', function(e){

        e.preventDefault();
        if (!(taskTitle.value == '' || taskBody.value == '')) {
 
            socket.emit('to do list',{
                title: taskTitle.value,
                task: taskBody.value
            });
        }

        else{

            console.log('The fields are empty!');
        }

        toDoForm.reset();
    });

    //Event Listener
    socket.on('to do list', function(data){

        toDoList.innerHTML += '<div class="task-container"><div class="task-title">' + 
        data.title + '</div>' +'<div class="task-body">' + data.task + '</div></div>';
    });