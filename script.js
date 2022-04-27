let tela = document.getElementById("resultado")


document.addEventListener("keydown", function(event) {
    if(event.key >= 0 || event.key <= 9 || event.key === "+" || event.key === "-" || event.key === "Backspace"){
        if(event.key === "Backspace") {
            tela.innerHTML = ``
        } else {
            tela.innerHTML += event.key
        }
    }else {
        window.alert(`[ERRO] "${event.key.toLocaleUpperCase()}" não é um número. Digite apenas números ou operações matemáticas!!!`)
    }
})


function botao(numero) {
    tela.innerHTML += numero
}

function soma() {
    tela.innerHTML += `+`
}
function limparTela() {
    tela.innerHTML = ``
}

function resposta() {
    let operacao = document.getElementById("resultado")
    alert(operacao.toString())
}


/*  document.addEventListener("keydown", function(event) {
    window.alert(`Apertou o ${event.key}`)
    console.log(event.key)
})  */   

// Como mapear teclas