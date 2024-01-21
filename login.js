function loginFun(){
  var data=[]
  var dataFrmLs=JSON.parse(localStorage.getItem("userData"))||[]
  var email=document.querySelector("#email").value
  var pass=document.querySelector("#pass").value
  dataFrmLs.forEach(function(elem){
      if(email==elem.uEmail && pass==elem.uPassword){
          alert("login successfull")
          window.location.href="welcome.html"
          data.push(elem)
          localStorage.setItem("loginData",JSON.stringify(data))
      }else{
          alert("Invalid Email and Password")
      }
  })
  
}