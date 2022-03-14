function somar() {
    let tn1 = window.document.getElementById('sn1')
    let tn2 = window.document.getElementById('sn2')
    let a = window.document.getElementById('resposta-soma')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    s = n1 + n2
    a.innerHTML += s
}