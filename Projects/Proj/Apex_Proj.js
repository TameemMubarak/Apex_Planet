// To-Do List Logic with localStorage
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

loadTasks();

// Product Listing with Filtering and Sorting
let products = [
  { name: 'Smartphone', category: 'electronics', price: 300, rating: 4.5 },
  { name: 'Laptop', category: 'electronics', price: 900, rating: 4.8 },
  { name: 'JavaScript Book', category: 'books', price: 20, rating: 4.3 },
  { name: 'Headphones', category: 'electronics', price: 100, rating: 4.1 },
  { name: 'Novel', category: 'books', price: 15, rating: 3.9 }
];

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortOption').value;

  let filtered = category === 'all' ? [...products] : products.filter(p => p.category === category);

  if (sort === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  filtered.forEach((p, index) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <div>
        <strong>${p.name}</strong><br>
        Category: ${p.category}<br>
        Price: $${p.price}<br>
        Rating: ${p.rating}
      </div>
      <button onclick="deleteProduct(${index})">Delete</button>`;
    productList.appendChild(div);
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  filterProducts();
}

filterProducts();
