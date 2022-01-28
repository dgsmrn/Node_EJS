const express = require("express");
const app = express(); //isntanciando o express e guardando na variável app

//app carrega tudo que tem dentro do express
//set() avisa o express que será utilizado ejs para renderizar o HTML
app.set("view engine", "ejs");

//get() cria uma rota na raiz do site e executa o index
app.get("/", function (req, res) {
  res.render("pages/index");
});

//get() cria uma rota para executar a página sobre que representa o arquivo about.ejs
app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

//funcao do express que fica ouvindo a porta 8080 -- http://localhost:8080/
app.listen(8080)
console.log("Sevidor Funcionando")