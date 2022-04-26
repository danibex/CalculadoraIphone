let botoes = [] 

function calcular() {

for(let c = 0; c < 10; c++){
    botoes[c] = Number(document.getElementsByClassName(c).value)
    window.alert(botoes)
}

}
