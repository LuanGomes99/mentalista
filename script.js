let tentativas = 7;
let numeroSecreto = Math.round(Math.random() * (100 - 1) + 1);

document.querySelector("#tentativas").innerText = `Tentativas Restantes: ${tentativas}`;

function reiniciarJogo() {
  tentativas = 7;
  numeroSecreto = Math.round(Math.random() * (100 - 1) + 1);
  document.querySelector("input").value = "";
  document.querySelector("p").innerText = "";
  document.querySelector("p").classList.remove("acertou", "errou");
  document.querySelector("#tentativas").innerText = `Tentativas Restantes: ${tentativas}`;
}

function button() {
  const input = document.querySelector("input");

  if (tentativas < 1) {
    alert("Suas tentativas acabaram!");
    reiniciarJogo();
  } else {
    if (parseInt(input.value) > 100 || parseInt(input.value) <= 0 || input.value === "") {
      alert("Valor inválido! Digite novamente.");
    } else {
      if (parseInt(input.value) === numeroSecreto) {
        document.querySelector("p").innerText = "Resposta certa, parabéns! :D";
        document.querySelector("p").classList.add("acertou");
        setTimeout(reiniciarJogo, 1500);
      } else if (parseInt(input.value) < numeroSecreto) {
        document.querySelector("p").innerText = "O número secreto é maior!";
        document.querySelector("p").classList.add("errou");
        tentativas -= 1;
        document.querySelector("#tentativas").innerText = `Tentativas restantes: ${tentativas}`;
      } else if (parseInt(input.value) > numeroSecreto) {
        document.querySelector("p").innerText = "O número secreto é menor!";
        document.querySelector("p").classList.add("errou");
        tentativas -= 1;
        document.querySelector("#tentativas").innerText = `Tentativas restantes: ${tentativas}`;
      }
    }
  }
}
