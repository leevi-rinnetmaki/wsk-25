// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector("ul");
const addButton = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
function addItems(items){
  items.forEach(i => {
    let listItem = document.createElement("li");
    let check = document.createElement("input");
    let task = document.createElement("label");
    let deleteButton = document.createElement("button");
    deleteButton.textContent="é";
    deleteButton.addEventListener("click", ()=>{
      list.removeChild(listItem);
    })

    let checkNode = document.createTextNode(i.task);
    check.appendChild(checkNode);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", i.id);
    if (i.completed) check.checked=true;
    
    let taskNode = document.createTextNode(i.task);
    task.appendChild(taskNode);
    task.setAttribute("for", i.id);

    listItem.appendChild(check);
    listItem.appendChild(task);
    listItem.append(deleteButton);
    list.appendChild(listItem);
  })
}

addItems(todoList);

addButton.addEventListener("click", ()=>{
  dialog.style.display="block";
})
form.onSubmit
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  addItems(
    [
      {
        id: +document.querySelector("ul li:last-child input")?.id+1,
        task: document.querySelector("input[type='text']").value.trim(),
        completed: false
      }
    ]
  );
  dialog.style.display="none";
})

//addItemButton.textContent("dada");