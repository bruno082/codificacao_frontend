function Cadastrar() {

    const nomeProprio = document.getElementById("nome-proprio");
    const apelido = document.getElementById("apelido");
    const nascimento = document.querySelector("#nascimento");
    const genero = document.querySelector("#genero")
    const email = document.getElementById("email")
    const senha = document.querySelector("senha")

    const nomepropriovalue = nomeproprio.value;
    const apelidovalue = apelido.value;
    const nascimentovalue = nascimento.value;
    const generovalue = genero.value;
    const emailvalue = email.value;
    const senhavalue = senha.value;

    if(nomepropriovalue === ""){
        nomeproprio.style.bordercolor = "red"
        return
    }else{
        nomeProprio.style.bordercolor = ""
    }

    if(apelidovalue === ""){
        apelido.style.bordercolor = "red"
        return
    }
}