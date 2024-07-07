// var largura =parseInt(prompt('Digite a largura'))
// var altura =parseInt(prompt('Digite a altura'))

// function mostraArea(l,a){
//     alert(`Á area é: ${l * a}`)
// }

/// FUNÇÕES QUE RETORNAM VALORES !


let largura = parseInt(prompt('Digite a largura'))
let altura = parseInt(prompt('Digite a altura'))

function mostraArea(){
     
    var area = calcularArea(largura,altura);
    alert('A área total é:' + area)
}

function mostrarOutput(){

   document.querySelector('#output').output.innerHTML = 'A área total é:' + area
   var area = calcularArea(largura,altura);

}

function calcularArea(l,a){
    return l * a;
}

