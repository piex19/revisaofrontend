var button = document.querySelector("button");

button.onclick = function(){
    var nome = prompt("Qual é o comando para verificar a versão instalada do git?");
    if (nome.toLowerCase() == "git --version") {
        alert("Parabéns, você acertou!"); 
        window.location = "aula4.html"; 
        
    } else {
        alert("Resposta errada.\nTente novamente.");
    }
    
};