const listContainer = document.querySelector(".list-container");

function addTask(){
    const inputTask = document.getElementById("inputTask");
    if (inputTask.value === ""){
        window.alert("Write something. You Bitch!!");
    }else{
        const li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
    // localStorage.clear();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

function saveData(){
    localStorage.setItem("To-Do-List", listContainer.innerHTML);
}
function displayData(){
    listContainer.innerHTML = localStorage.getItem("To-Do-List");
}
displayData();
