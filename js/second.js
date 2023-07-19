var todos = []; // Array to store the todo items

function openTab(tabName) {
  // Hide all tab content
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove "active" class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the selected tab content and mark the tab as active
  var tabContentElement = document.getElementById(tabName + "-content");
  var tabElement = document.getElementById(tabName + "-tab");

  if (tabContentElement && tabElement) {
    tabContentElement.style.display = "block";
    tabElement.classList.add("active");
  }

  // Load different page content if needed
  if (tabName === "projects") {
    loadProjectsPage();
  } else if (tabName === "clock") {
    window.location.href = "clock.html";
  } else if (tabName === "work") {
    loadWorkPage();
  } else if (tabName === "todo") {
    loadTodoPage();
  }
}

function loadProjectsPage() {
  // Logic to load the Projects page content
  console.log("Loading Projects page content...");
}

function loadPicPage() {
  // Logic to load the Pic page content
  console.log("Loading Pic page content...");
}

function loadWorkPage() {
  // Logic to load the Work page content
  console.log("Loading Work page content...");
  
  // Display some text in the Work tab
  var workTextElement = document.getElementById("work-text");
  workTextElement.textContent = "Some text for the Work tab.";
}

function loadTodoPage() {
  // Logic to load the Todo List page content
  console.log("Loading Todo List page content...");
}

function addTodo() {
  var todoInput = document.getElementById("todo-input");
  var taskList = document.getElementById("task-list");
  
  if (todoInput.value.trim() !== "") {
    var todoItem = {
      task: todoInput.value,
      completed: false
    };
    
    todos.push(todoItem);
    
    renderTodoList();
    
    todoInput.value = "";
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodoList();
}

function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodoList();
}

function renderTodoList() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  
  for (var i = 0; i < todos.length; i++) {
    var todoItem = todos[i];
    
    var listItem = document.createElement("li");
    listItem.textContent = todoItem.task;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTodo(i);
    };
    
    var toggleButton = document.createElement("button");
    toggleButton.textContent = todoItem.completed ? "Undo" : "Complete";
    toggleButton.onclick = function() {
      toggleTodoCompleted(i);
    };
    
    listItem.appendChild(deleteButton);
    listItem.appendChild(toggleButton);
    
    if (todoItem.completed) {
      listItem.style.textDecoration = "line-through";
    }
    
    taskList.appendChild(listItem);
  }
}

// Open the default tab on page load
openTab("projects");
