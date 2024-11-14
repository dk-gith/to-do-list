// Get references to the input field, add button, and the todo list
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(task) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const removeButton = document.createElement('button');

  // Set up span with task text
  span.textContent = task;
  
  // Set up the remove button
  removeButton.textContent = 'Delete';
  removeButton.classList.add('remove');
  removeButton.onclick = () => {
    li.classList.add('deleting');
    setTimeout(() => li.remove(), 300); // Remove item with delay for animation
  };

  // Mark as completed when clicked
  span.onclick = () => {
    li.classList.toggle('completed');
  };

  // Append span and remove button to the li
  li.appendChild(span);
  li.appendChild(removeButton);

  // Append the li to the todo list
  todoList.appendChild(li);
}

// Add task to the list when the 'Add' button is clicked
addButton.onclick = () => {
  const task = todoInput.value.trim();

  if (task !== "") {
    createTodoItem(task);
    todoInput.value = ""; // Clear input field
  } else {
    alert("Please enter a task!");
  }
};

// Allow pressing "Enter" to add the task as well
todoInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});
