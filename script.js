const inputEl = document.querySelector('.input');
const btn = document.querySelector('.btn');
const listContainer = document.querySelector('.list-container');

btn.addEventListener('click',function(){
        if(inputEl.value == ""){
            alert("To-do can't be empty");
        }
        else{
           let li = document.createElement('li');
           li.innerHTML = inputEl.value;
           listContainer.appendChild(li);
           let span = document.createElement('span');
           span.innerHTML = '\u00d7';
           li.appendChild(span);
        }
        inputEl.value = "";
        saveData();
    });

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'li'){
         e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'span'){
        e.target.parentNode.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();