 

// var mensagem = ''


// function mostrar(){

//     apagar()
//     var n = parseInt(prompt('Digite um numero'))
//     for(let i= 1; i <=100; i++ ){
    
//         mensagem +=`${n} x ${i} =  ${n*i} <br>`

//     }

//     output.innerHTML =  mensagem
     

// }

// function apagar(){

//     mensagem = ''

//     output.innerHTML = mensagem
// }

//

var n = parseInt(prompt('Digite um numero'))


 escrever();

 function escrever(){
    var output = document.querySelector('#output');
    output.innerHTML = n
    
 }

function calcular(simbolo){
   
    var n1 = parseInt(prompt('digite outro numero'))
    switch(simbolo){
        case '+':
            n +=n1;
            break;
        case '*':
            n*=n1;
            break  
        case '-':
            n-=n1;
            break  
        case '/':
            n/=n1;
  
    }
    
      escrever()
}

// function Multiplicar(){

//     var n2 = parseInt(prompt('digite outro numero'))
    
//     n = n * n2
//     escrever()

// }

// function Subtrair(){

//     var n3 = parseInt(prompt('digite outro numero'))
//     n = n-n3;
//     escrever()

// }

// function Dividir(){
//     var n4 = parseInt(prompt('digite outro numero'))
//     n = n/n4;
//     escrever()

// }

      





