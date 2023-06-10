document.getElementById("loginForm").addEventListener("submit",function(event){
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "emerson" && email === "emerson.cardoso@gmail.com" && password === "claudete"){
      window.location.href = "questions.html";

  }else{
      alert("usuario nao cadastrado")

  }



})
  