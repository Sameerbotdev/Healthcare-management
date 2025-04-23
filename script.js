document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorDisplay = document.getElementById("loginError");
  
        if (username === "" || password === "") {
          errorDisplay.textContent = "Please fill in both fields.";
        } else if (username === "admin" && password === "admin123") {
          window.location.href = "index.html";
        } else {
          errorDisplay.textContent = "Invalid credentials. Try 'admin' / 'admin123'.";
        }
      });
    }
  });
  