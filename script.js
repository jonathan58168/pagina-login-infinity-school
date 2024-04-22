function toggleIcone() {
    var iconeOn = document.querySelector("#meuElemento .ico-on");
    var iconeOff = document.querySelector("#meuElemento .ico-off");
    
    if (iconeOn.style.display === "none") {
      iconeOn.style.display = "inline";
      iconeOff.style.display = "none";
    } else {
      iconeOn.style.display = "none";
      iconeOff.style.display = "inline";
    }
  }

// Modal de recuperação de senha
var modalSenha = document.getElementById("modal-recover-password");
var spanSenha = document.querySelector("#modal-recover-password .close");

spanSenha.onclick = function() {
  modalSenha.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalSenha) {
    modalSenha.style.display = "none";
  }
}

function abrirModalSenha() {
    modalSenha.style.display = "block";
}

function fecharModalSenha() {
    modalSenha.style.display = "none";
}

function confirmar() {
  var email = document.getElementById("email-modal-senha").value;
  alert("E-mail inserido: " + email);
  modalSenha.style.display = "none";
}

// Modal de cadastro
var modalCadastro = document.getElementById("modal-cadastro");
var spanCadastro = document.querySelector("#modal-cadastro .close");

spanCadastro.onclick = function() {
    modalCadastro.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalCadastro) {
    modalCadastro.style.display = "none";
    }
}

function abrirModalCadastro() {
    modalCadastro.style.display = "block";
}

function fecharModalCadastro() {
    modalCadastro.style.display = "none";
}

function confirmarCadastro() {
    var email = document.getElementById("email-modal").value;
    alert("E-mail inserido: " + email);
    modalCadastro.style.display = "none";
}
// Função para limpar os campos de entrada
function limparCampos() {
    document.getElementById("email-modal-senha").value = "";
    document.getElementById("nome-modal").value = "";
    document.getElementById("email-modal-cadastro").value = "";
    document.getElementById("senha-modal").value = "";
    document.getElementById("telefone-modal").value = "";
}
  
  // Quando o usuário clica no elemento (x), fecha o modal e limpa os campos
  spanSenha.onclick = function() {
    modalSenha.style.display = "none";
    limparCampos();
  }
  
  spanCadastro.onclick = function() {
    modalCadastro.style.display = "none";
    limparCampos();
  }
  
  // Quando o usuário clica em qualquer lugar fora do modal, fecha o modal e limpa os campos
  window.onclick = function(event) {
    if (event.target == modalSenha || event.target == modalCadastro) {
      event.target.style.display = "none";
      limparCampos();
    }
  }

// Função para confirmar a entrada do e-mail
function confirmar() {
    var email = document.getElementById("email-modal-senha").value;
    if (email) { // Verifica se o campo de e-mail foi preenchido
      alert("E-mail inserido: " + email);
      modalSenha.style.display = "none";
      limparCampos();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
// Função para confirmar o cadastro
function confirmarCadastro() {
    var nome = document.getElementById("nome-modal").value;
    var email = document.getElementById("email-modal-cadastro").value;
    var senha = document.getElementById("senha-modal").value;
    var telefone = document.getElementById("telefone-modal").value;
    
    if (nome && email && senha && telefone) { // Verifica se todos os campos foram preenchidos
      alert("Cadastro realizado com sucesso!");
      modalCadastro.style.display = "none";
      limparCampos();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
}
  