/*Função para Alterar Cor dos elementos*/
function alteraSolado() {
    /*Variável de forro*/
    var solado = document.getElementById("cssol").checked;
  
    if (solado == "Sem Solado")
     {
       document.getElementById("principalsolado").src = "_imagens/bobs.png";
    }