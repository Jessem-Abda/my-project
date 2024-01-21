

var data = []

$('#button').on("click", function () {
    var email = document.querySelector("#email").value
    var password = document.querySelector("#pass").value
    var obj = {}
    obj.uEmail = email
    obj.uPassword = password
    data.push(obj)
    localStorage.setItem("userData", JSON.stringify(data))
    alert("Signed up successfully ")
    alert("Now Please login")
    window.location.href = "login.html"

})