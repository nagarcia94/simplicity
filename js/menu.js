"use strict"


// Estou selecionando o elemento (através de descendência) que acionará o menu, utilanzando o DOM (document) e queryselector para selecionar o que eu quero. 
const botaoMenu = document.querySelector("nav h2")
/* console.log(botaoMenu) */


// Selecionando a lista /menu através da classe
const menu = document.querySelector(".menu");
/* console.log(menu) */

// Selecionado o link que está dentro do nav h2 (foi usado o botaoMenu pois ja tinha utilizado ali em cima entao ja estava gravado na memoria o nav h2, como so faltava o link "a" entao usei o botaoMenu e depois selecionei o "a")
const textoBotao = botaoMenu.querySelector("a");
/* // console.log(textoBotao) - para ver se funcionou no console. */

// Para efetuar a programaçao que eu mostrei a cima usando o evento.

botaoMenu.addEventListener("click", function(event){
    
    /* Anular/prevenir o comportamento padrão do link */
    event.preventDefault(); 
    menu.classList.toggle("aberto");
});



