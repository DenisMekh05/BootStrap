const inputs = document.querySelectorAll("input")
const users = [
    {
        username: "test",
        password: "test"
    }
]
//  register
$(".btn-register").click(function(e) {
    e.preventDefault()
    if (users.some(user => user.username == inputs[0].value)) {
        $(".user-exist").fadeIn()
        $(".user-exist").fadeOut(2000)
    } else if (inputs[1].value == "" || inputs[0].value == "") {
        $(".no-username-password").fadeIn()
        $(".no-username-password").fadeOut(2000)
    } else {
        $(".registered").fadeIn()
        $(".registered").fadeOut(7000)
        $(".register").attr("class", "register hiden-thing")
        $(".login").attr("class", "login")
        users.push({
            username: inputs[0].value,
            password: inputs[1].value
        })
        console.log(users)
    }
})
$(".have-account").click(function(e){
    e.preventDefault()
    $(".register").attr("class", "register hiden-thing")
    $(".login").attr("class", "login")
})
//  login
$(".btn-login").click(function(e){
    e.preventDefault()
    if (users.some(user => user.username == inputs[2].value && user.password == inputs[3].value)) {
        location.href = "https://github.com/"
    } else {
        $(".incorect-username-password").fadeIn()
        $(".incorect-username-password").fadeOut(2000)
    }
})
$(".didnt-register").click(function(e){
    e.preventDefault()
    $(".login").attr("class", "login hiden-thing")
    $(".register").attr("class", "register")
})