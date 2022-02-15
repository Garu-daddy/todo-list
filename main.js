'use strict';

document.querySelector('.add_btn').onclick = function(){
    if(document.querySelector('.list_input').value.length == 0){
        alert("바보! 해야할 일을 입력하세요!")
    }
    else{
        document.querySelector('.tasks').innerHTML += `
            <div class="tasks">
             <span class="task_box">
                <span class="taskname">
                    ${document.querySelector('.new_task input').value}
                </span>
                <button class="delete">
                <i class="fa-solid fa-trash-can fa-xl"></i>
                </button>
             </span>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      

 
    }
}
    