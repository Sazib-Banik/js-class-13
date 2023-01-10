const formSelect = document.getElementById("form_area");
const taskInput = document.getElementById("task_input");
const parentDiv = document.getElementById("all_task_area");
//console.log(parentDiv);
const errorText = document.getElementById("error_text");

formSelect.addEventListener("submit", function(e){
    e.preventDefault(); // use for page load off

    const taskValue = taskInput.value;
    if(taskValue){
       taskInput.value = "";
    // create div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single_task");
    // create input
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = taskValue;
    textInput.setAttribute("readonly", "readonly");
    // create edit button
    const createEditBtn = document.createElement("button");
    createEditBtn.classList.add("edit_btn");
    createEditBtn.innerText = "Edit";
    // create Complete button
    const createCompleteBtn = document.createElement("button");
    createCompleteBtn.classList.add("complete_btn");
    createCompleteBtn.innerText = "Complete";
    // create Delete button
    const createDeleteBtn = document.createElement("button");
    createDeleteBtn.classList.add("del_btn");
    createDeleteBtn.innerText = "Delete";

    // create Component
    singleTaskDiv.appendChild(textInput);
    singleTaskDiv.appendChild(createEditBtn);
    singleTaskDiv.appendChild(createCompleteBtn);
    singleTaskDiv.appendChild(createDeleteBtn);
    //console.log(singleTaskDiv);

    // add parentDiv
    parentDiv.appendChild(singleTaskDiv);

    // edit funtion
    createEditBtn.addEventListener("click", function(e){
        if(createEditBtn.innerText == "Edit"){
            createEditBtn.innerText = "Save";
            textInput.removeAttribute("readonly");
            textInput.focus();
        }else if (createEditBtn.innerText == "Save") {
            createEditBtn.innerText = "Edit";
            textInput.setAttribute("readonly", "readonly");
        }
    });

    // complete function
    createCompleteBtn.addEventListener("click", function(e){
        if(createCompleteBtn.innerText == "Complete"){
            createCompleteBtn.innerText = "Completed";
            singleTaskDiv.classList.add("task_completed");
        }
    });

    // delete function
    createDeleteBtn.addEventListener("click", function(e){
        if(createDeleteBtn.innerText == "Delete"){
            parentDiv.removeChild(singleTaskDiv);
        }
    });

    //console.log(createCompleteBtn,createDeleteBtn,createEditBtn)
    }else{
        errorText.innerHTML = "<p>Please Write Your Task.</p>";
    }
});








