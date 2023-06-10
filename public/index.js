document.getElementById("submit").addEventListener("click",function(event){
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var nameError = document.getElementById("name").value

  if (name === "Emerson" && email === "admin@admin.com" && password === "123"){
      window.location.href = "questions.html";
      alert('Seja bem vindo ' + name)

  }else{
      alert(name + ' você não está cadastrado')

  }



})
  