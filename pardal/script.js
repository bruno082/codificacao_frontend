
const velocidade = Number(document.querySelector(".velocidade").value)
const botao = document.querySelector(".botao")
const mensagem = document.querySelector(".mensagem")

botao.addEventListener("click", () => {

    if(velocidade > 60){
        mensagem.textContent = "Voce ultrapassou a velocidade permitida!"
        document.body.style.backgroundColor = "red"
    }else{
        mensagem.textContent = "voce está dentro do limite de velocidade!"
        document.body.style.backgroundColor = "green"    
    }
})