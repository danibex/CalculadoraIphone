function somar() {
    let tn1 = document.getElementById('sn1')
    let tn2 = document.getElementById('sn2')
    let a = document.getElementById('resposta-soma')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    s = n1 + n2
    a.innerHTML = `O resultado da soma é: ${s}`
}

function subtrair() {
    let subt1 = document.getElementById('sub1')
    let subt2 = document.getElementById('sub2')
    let texto = document.getElementById('resposta-subtracao')
    let n1 = Number(subt1.value)
    let n2 = Number(subt2.value)
    s = n1 - n2
    texto.innerHTML = `O resultado da subtração é: <strong>${s}</strong>`
     
}

function multiplicar () {
    let mu1 = document.getElementById('m1')
    let mu2 = document.getElementById('m2')
    let n1 = Number(mu1.value)
    let n2 = Number(mu2.value)
    let texto = document.getElementById('resposta-multiplicacao')
    s = n1 * n2
    texto.innerHTML = `O resultado da multiplicação é: ${s}`
}
