
const caixa = document.querySelector(".caixa");
const botao = document.querySelector(".botao");
const botao2 = document.querySelector(".botao2");

botao.addEventListener("click", () => {
    caixa.classList.toggle("vermelho");
})

botao2.addEventListener("click", () => {
    caixa.classList.remove("vermelho");
})