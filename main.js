const registerButton = document.querySelector("#register-btn")
const loginButton = document.querySelector("#login-btn")
const registerForm = document.querySelector("#register")
const loginForm = document.querySelector("#login")

registerButton.addEventListener("click", () => {
    registerForm.style.display = "none"
    loginForm.style.display = "block"
    console.log("register was clicked")
})

loginButton.addEventListener("click", () => {
    registerForm.style.display = "block"
    loginForm.style.display = "none"
    console.log("login was clicked")
})