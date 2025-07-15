document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorEl = document.getElementById("formError");

  const namePattern = /^[A-Za-z ]+$/;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorEl.textContent = "Please fill all fields.";
  } else if (!namePattern.test(name)) {
    errorEl.textContent = "Name should contain only letters and spaces.";
  } else if (!emailPattern.test(email)) {
    errorEl.textContent = "Please enter a valid email.";
  } else {
    errorEl.textContent = "";
    alert("Message Sent.");
    this.reset();
  }
});
