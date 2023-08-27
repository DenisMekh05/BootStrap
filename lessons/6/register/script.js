const form = document.querySelector("form")
const registerBtn = document.querySelector("button")
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
registerBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!form.checkValidity) {
        event.preventDefault()
        event.stopPropagation()
    }
        
    form.classList.add("was-validated")
    if (!localusers.some(user => user.username == inputs[0].value)) {
        if (inputs[0].value !== "" && inputs[1].value !== "") {
            localusers.push(
                {
                    username: inputs[0].value,
                    password: inputs[1].value
                }
            )
            localStorage.removeItem("users")
            localStorage.setItem("users", JSON.stringify(localusers))
            window.location.href = "../login/index.html"
        }
    } else {
        alertBlock.classList.remove("d-none")
        alertBlock.classList.add("d-block")
        setTimeout(() => {
            alertBlock.classList.remove("d-block")
            alertBlock.classList.add("d-none")
        }, 2000);
    }
})