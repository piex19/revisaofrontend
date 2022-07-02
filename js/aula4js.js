var button = document.querySelector("button");

button.onclick = function(){
    var nome = prompt("Qual é o comando para ver o status?");
    if (nome.toLowerCase() == "git status") {
        alert("Parabéns, você acertou!");
        window.location = "aula5.html";
        
    } else {
        alert("Resposta errada.\nTente novamente.");
    }
    
};