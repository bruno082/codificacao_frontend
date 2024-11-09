function verificaDados() {

    const nome = document.querySelector("#nome").ariaValueMax;
    const sobrenome = document.querySelector("#sobrenome").value;
    const senha = document.querySelector("#senha").value
    const resultado = document.querySelector(".resultado")

    if(nome === "" || sobrenome === "" || senha === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#nome").style.bordercolor = "red"
        return
    }

    if(sobrenome=== "" || sobrenome === "" || senha === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#sobrenome").style.bordercolor = "red"
        return
    }

    if(senha === "" || sobrenome === "" || senha === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector("#senha").style.bordercolor = "red"
        return
    }

    resultado.innerHTML = `<p>Nome: ${nome}</p> 
                           <p>Sobrenome: ${sobrenome}</p>
                           <p>Senha: ${senha} </p>`

}