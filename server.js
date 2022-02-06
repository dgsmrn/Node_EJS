const express = require("express");
const app = express(); //isntanciando o express e guardando na variável app

//app carrega tudo que tem dentro do express
//set() avisa o express que será utilizado ejs para renderizar o HTML
app.set("view engine", "ejs");

//get() cria uma rota na raiz do site e executa o index
app.get("/", function (req, res) {
  const items = [
    { title: "D", message: "esenvolver aplicações/serviços de forma fácil" },
    { title: "E", message: "JS usa Javascript para renderizar HTML"},
    { title: "M", message: "uito fácil de usar"},
    { title: "A", message: "morzinho"},
    { title: "I", message: "nstall ejs"},
    { title: "S", message: "intaxe simples"},
  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

  res.render("pages/index", {qualitys: items, subtitle: subtitle} ); //renderiza a página passando um objeto que recebe um array
});

//get() cria uma rota para executar a página sobre que representa o arquivo about.ejs
app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

//funcao do express que fica ouvindo a porta 8080 -- http://localhost:8081/
app.listen(8081);
console.log("Sevidor Funcionando");
