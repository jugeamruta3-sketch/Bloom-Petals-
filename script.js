function Login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", "email");
        window.location.href = "index.html";
    } else {
        error.textContent = "Invalid username and password";
    }
}
function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password"
    }
}
function toggleMenu() {
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {
        icon.classList.add("fa-xmark");
        icon.classList.remove("fa-bars");

    }
}
