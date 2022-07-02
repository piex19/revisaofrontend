var button = document.querySelector("button");

button.onclick = function(){
    var nome = prompt("Qual é o comando para iniciar um repositório remoto?");
    if (nome.toLowerCase() == "git remote") {
        alert("O " + nome + " serve para adicionar um projeto"
        + "\na um repositório, remotamente."
        + "\nParabéns, você acertou!");
        window.location = "aula3.html";
        
    } else {
        alert("Resposta errada.\nTente novamente.");
    }
    
};