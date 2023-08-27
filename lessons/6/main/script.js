const logInBtn = document.querySelector(".log-in")
const logOutBtn = document.querySelector(".log-out")
const myComputersBtn = document.querySelector(".my-computers")
const computerShopBtn = document.querySelector(".computer-shop")
const h3 = document.querySelector("h3")
if (localStorage.getItem("curentUser")) {
    logInBtn.style.display = "none"
    h3.innerHTML = `User: ${JSON.parse(localStorage.getItem("curentUser"))}`
} else {
    logOutBtn.style.display = "none"
}
logOutBtn.addEventListener("click", function(){
    localStorage.removeItem("curentUser")
    h3.innerHTML = `User: `
    this.style.display = "none"
    logInBtn.style.display = "inline"
})
logInBtn.addEventListener("click", function(){
    window.location.href = "../login/index.html"
})