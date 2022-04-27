let tela = document.getElementById("resultado")
let n1 = []
let controle1 = ""
let controle2 = ""
let operacao = ""

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
    n1.push(numero)
}
function subtracao() {
    tela.innerHTML += `-`
    operacao += "-"
    for(let c = 0; c < n1.length; c++) {
        controle1 += `${n1[c]}`
    }
    n1.splice(0, n1.length)
}
function soma() {
    tela.innerHTML += `+`
    operacao += "+"
    for(let c = 0; c < n1.length; c++) {
        controle1 += `${n1[c]}`
    }
    n1.splice(0, n1.length)
}
function limparTela() {
    tela.innerHTML = ``
    n1.splice(0, n1.length) // Apenas para garantir que esteja vazio
    controle1 = ""  // Apenas para garantir que esteja vazio
    controle2 = ""  // Apenas para garantir que esteja vazio
}

function calcular() {
    switch(operacao) {
        case "+":
            for(let c = 0; c < n1.length; c++) {
                controle2 += `${n1[c]}`
            }
            s = parseInt(controle1) + parseInt(controle2)
            tela.innerHTML = s
            n1.splice(0, n1.length)
            controle1 = ""
            controle2 = ""
            s = 0
        break
        case "-":
            for(let c = 0; c < n1.length; c++) {
                controle2 += `${n1[c]}`
            }
            sub = parseInt(controle1) - parseInt(controle2)
            tela.innerHTML = sub
            n1.splice(0, n1.length)
            controle1 = ""
            controle2 = ""
            sub = 0
        break
        default:
            window.alert("[ERRO] Favor refaça a operação ou recarregue a página!!!")
        break
    } 
    operacao=""
}

function alerta() {
    alert("AINDA EM DESENVOLVIMENTO...")
}

/*  document.addEventListener("keydown", function(event) {
    window.alert(`Apertou o ${event.key}`)
    console.log(event.key)
})  */   

// Como mapear teclas