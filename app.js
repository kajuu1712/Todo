let addTaskBtn = document.querySelector(".addTask");
let rmvAllTask = document.querySelector(".rmvAllTask");
let itemNo = 0;
addTaskBtn.addEventListener("click", () => {
    let task = document.querySelector(".task");
    if(task.value != "")
        addTodo(task.value, itemNo);
    task.value = "";  //refresh input value
    itemNo++;
});

let ul = document.querySelector(".showTodos ul");
//add the task
function addTodo(task, itemNo) {
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="${itemNo}" name="task"><label for="task">${task}</label> &nbsp; <button class="rmvTask btns">X</button>`;
    ul.appendChild(li);
    if(ul.childElementCount >= 0)
        rmvAllTask.style.opacity = "1";
    
}

ul.addEventListener("click", (event) => {
    // Remove the task
    if (event.target.classList.contains("rmvTask")) {
        let itsLi = event.target.parentElement;
        itsLi.remove();

        if (ul.childElementCount === 0) {
            rmvAllTask.style.opacity = "0.5";
        }
    }
});

//remove all task
rmvAllTask.addEventListener("click", () => {
    ul.innerHTML = "";
    rmvAllTask.style.opacity = "0.5";
});


