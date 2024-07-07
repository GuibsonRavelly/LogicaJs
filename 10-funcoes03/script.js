var n = parseInt(prompt('Digite um numero'))
escrever(n);


function iniciarCalculo(simbolo){
    var n = parseInt(document.querySelector('#output').textContent);
    var n1 = parseInt(prompt('Digite um numero'))

    var msg = calcular(simbolo,n,n1)

    escrever(msg)
}


 function escrever(mensagem){
    var output = document.querySelector('#output');
    output.innerHTML = mensagem
    
 }

function calcular(simbolo, n , n1){

      var numeroCalculado = null;

    switch(simbolo){
        case '+':
        numeroCalculado = n + n1;
            break;
        case '*':
            numeroCalculado = n* n1;
            break  
        case '-':
            numeroCalculado = n- n1;
            break  
        case '/':
            numeroCalculado = n/ n1;
        default:
            numeroCalculado = "Operação inválida";
            

  
    }

    return numeroCalculado;
    
}