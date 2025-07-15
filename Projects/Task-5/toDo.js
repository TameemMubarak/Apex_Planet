document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const time = document.getElementById("time").value;
  const category = document.getElementById("category").value.trim();

  if (!title || !time || !category) {
    alert("Please fill all fields.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
      <strong>${title}</strong>
      <span>Time: ${time}</span>
      <span>Category: ${category}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;

  document.getElementById("taskList").appendChild(li);
  document.getElementById("todoForm").reset();
});

function removeTask(button) {
  button.parentElement.remove();
}
