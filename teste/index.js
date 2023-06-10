document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (username === "usuario" && password === "senha") {
      window.location.href = "outra_pagina.html";
    } else {
      alert("Usuário ou senha inválidos");
    }
  });
  