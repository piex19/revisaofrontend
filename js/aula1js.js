var buttonNext = document.querySelector("button");

buttonNext.onclick = function(){
    var nome = prompt("Qual é o comando para iniciar o git?");
    if (nome.toLowerCase() == "git init") { 
        alert("O " + nome + " serve para iniciar o git.\nParabéns, você acertou!");
        window.location = "aula2.html";

    } else {
        alert("Resposta errada.\nTente novamente.");
    }
    
};