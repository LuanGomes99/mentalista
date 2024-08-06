const MAX_TENTATIVAS = 7;
const MIN_NUMERO_SECRETO = 1;
const MAX_NUMERO_SECRETO = 100;

let tentativasRestantes = MAX_TENTATIVAS;
let numeroSecreto = gerarNumeroSecreto();

document.addEventListener("DOMContentLoaded", () => {
  atualizarTentativas();
  document.querySelector("#verificar").addEventListener("click", verificarTentativa);
  document.querySelector("#reiniciar").addEventListener("click", reiniciarJogo);
});

function gerarNumeroSecreto() {
  return Math.floor(Math.random() * (MAX_NUMERO_SECRETO - MIN_NUMERO_SECRETO + 1)) + MIN_NUMERO_SECRETO;
}

function reiniciarJogo() {
  tentativasRestantes = MAX_TENTATIVAS;
  numeroSecreto = gerarNumeroSecreto();
  limparEntrada();
  atualizarMensagem("");
  removerClassesResultado();
  atualizarTentativas();
}

function limparEntrada() {
  document.querySelector("input").value = "";
}

function atualizarMensagem(mensagem) {
  const elementoMensagem = document.querySelector("#mensagem");
  elementoMensagem.innerText = mensagem;
}

function atualizarTentativas() {
  document.querySelector("#tentativas").innerText = `Tentativas Restantes: ${tentativasRestantes}`;
}

function removerClassesResultado() {
  const elementoMensagem = document.querySelector("#mensagem");
  elementoMensagem.classList.remove("acertou", "errou");
}

function verificarTentativa() {
  const input = document.querySelector("input");
  const valor = parseInt(input.value, 10);

  if (isTentativasEsgotadas()) {
    alert("Suas tentativas acabaram!");
    reiniciarJogo();
  } else if (isValorInvalido(valor)) {
    alert("Valor inválido! Digite um número entre 1 e 100.");
  } else {
    processarTentativa(valor);
  }
}

function isTentativasEsgotadas() {
  return tentativasRestantes < 1;
}

function isValorInvalido(valor) {
  return isNaN(valor) || valor < MIN_NUMERO_SECRETO || valor > MAX_NUMERO_SECRETO;
}

function processarTentativa(valor) {
  if (valor === numeroSecreto) {
    atualizarMensagem("Resposta certa, parabéns! :D");
    document.querySelector("#mensagem").classList.add("acertou");
    setTimeout(reiniciarJogo, 1500);
  } else {
    tentativasRestantes--;
    atualizarTentativas();

    if (valor < numeroSecreto) {
      atualizarMensagem("O número secreto é maior!");
    } else {
      atualizarMensagem("O número secreto é menor!");
    }

    document.querySelector("#mensagem").classList.add("errou");
  }
}
