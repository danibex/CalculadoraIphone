
  var resultadoMultiplicacao = multiplique(10, 50);
  
  var divLocal = document.getElementById('exibe_resultado');

  divLocal.innerHTML += resultadoMultiplicacao;
 
  function multiplique(numero1, numero2) {
  
    var resultado = 0;
    
    resultado = numero1 * numero2;
   
    return resultado;
  }
  
function funcao1() {  
  var number1 = document.getElementById("soma1");
  var number2 = document.getElementById("soma2");
  var CalculoSoma = soma(number1,number2)
  var LocalDoResultadoDaSoma = document.getElementById("ResultadoDaSoma");

  LocalDoResultadoDaSoma.innerHTML += CalculoSoma; 

  function some(number1,number2) {
    var sresultado = 0;
    resultado = number1 + number2;
    return resultado;
  }
}
