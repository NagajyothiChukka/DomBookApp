let form = document.getElementById("form");

form.addEventListener("submit", function () {
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    if (email == "admin@empher.com" && password == "empher@123") {
        window.location.href = "admin.html";
        alert("Logged in as Admin");

    } else if (email == "user@empher.com" && password == "user@123") {
        window.location.href = "books.html";
        localStorage.setItem("loginData", JSON.stringify({ email, password }));
    } else {
        alert("Please Login with correct email and password");
    }
})