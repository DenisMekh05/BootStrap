let values
$(".btn-primary").click(function () {
    $(".inputs-box").css("opacity", "1")
})
$(".btn-danger").click(function () {
    $("tbody").html(function (i, prev) {
        if ($(".cash").val().startsWith("+")) {
            values = prev + `<tr><td>${$(".category").val()}</td><td class="table-success">${$(".cash").val()}</td></tr>`
            $(".inputs-box").css("opacity", "0")
            $("input").val("")
            return values
        } else if ($(".cash").val().startsWith("-")) {
            values = prev + `<tr><td>${$(".category").val()}</td><td class="table-danger">${$(".cash").val()}</td></tr>`
            $(".inputs-box").css("opacity", "0")
            $("input").val("")
            return values
        }
    })
})