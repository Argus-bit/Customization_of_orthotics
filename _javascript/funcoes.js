/*Função para Alterar Cor dos elementos*/
function alteraImagem() {
  /*Variável de forro*/
  var corForro = document.getElementById("cforro").value;

  if (corForro == "Amarelo") {
      document.getElementById("principalforro").src = "_imagens/forro/forroAmarelo.png";
  }
  if (corForro == "Azul Claro") {
      document.getElementById("principalforro").src = "_imagens/forro/forroAzulclaro.png"
  }
  if (corForro == "Azul Escuro") {
      document.getElementById("principalforro").src = "_imagens/forro/forroAzul.png"
  }
  if (corForro == "Rosa Claro") {
      document.getElementById("principalforro").src = "_imagens/forro/forroRosaclaro.png"
  }
  if (corForro == "Rosa Pink") {
      document.getElementById("principalforro").src = "_imagens/forro/forroRosapink.png"
  }
  if (corForro == "Vermelho") {
      document.getElementById("principalforro").src = "_imagens/forro/forroVermelho.png"

  }
  if (corForro == "Verde") {
      document.getElementById("principalforro").src = "_imagens/forro/forroVerde.png"
  }
/*Variável de Velcro*/
  var corVelcro = document.getElementById("cvelcro").value;

  if (corVelcro == "Amarelo") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroAmarelo.png";
  }
  if (corVelcro == "Azul Claro") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroAzulclaro.png"
  }
  if (corVelcro == "Azul Escuro") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroAzul.png"
  }
  if (corVelcro == "Rosa Claro") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroRosaclaro.png"
  }
  if (corVelcro == "Rosa Pink") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroRosapink.png"
  }
  if (corVelcro == "Vermelho") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroVermelho.png"

  }
  if (corVelcro == "Verde") {
      document.getElementById("principalvelcro").src = "_imagens/velcro/velcroVerde.png"
  }
}