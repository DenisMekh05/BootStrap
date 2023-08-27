const form = document.querySelector("form")
const loginBtn = document.querySelector("button")
const inputs = document.querySelectorAll("input")
const alertBlock = document.querySelector(".alert")
let users = [
    {
        username: "test",
        password: "test"
    }
]
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users))
}
const localusers = JSON.parse(localStorage.getItem("users"))
loginBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!form.checkValidity) {
        event.preventDefault()
    }
    form.classList.add("was-validated")
    if (localusers.some(user => user.username == inputs[0].value && user.password == inputs[1].value)) {
        localStorage.removeItem("curentUser")
        localStorage.setItem("curentUser", JSON.stringify(inputs[0].value))
        window.location.href = "../main/index.html"
    } else {
        alertBlock.classList.remove("d-none")
        alertBlock.classList.add("d-block")
        setTimeout(() => {
            alertBlock.classList.remove("d-block")
            alertBlock.classList.add("d-none")
        }, 1000);
    }
})