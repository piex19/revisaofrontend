var button = document.querySelector("button");

button.onclick = function(){
    var nome = prompt("Qual é o comando para adicionar todos os arquivos para o repositório?");
    if (nome.toLowerCase() == "git add .") {
        alert("Parabéns, você acertou!");
        window.location = "final.html";
        
    } else {
        alert("Resposta errada.\nTente novamente.");
    }
    
};