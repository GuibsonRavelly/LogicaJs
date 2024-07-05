//peir para o usario digitar dois numeros

// let n1 = prompt('Primeira nota');
// n1 = parseFloat(n1)

// let n2 = prompt('Segunda nota');
// n2 = parseFloat(n2)

// let n3 = prompt('Terceira Nota');
// n3 = parseFloat(n3);

// var media = (n1 + n2 + n3) / 3;
// parseInt(media)

// if( media > 7 ){
//     alert("Sua média é:" + media + ' Paranbens você esta aprovado !')
// }else alert("Você esta reprovado")


let n1 = prompt('Digite um numero');
n1 = parseInt(n1)

let n2 = prompt('Digite outro numero');
n2 = parseInt(n2)

var resulatdo = (n1 % n2)  
var elevado = ( n1 ** n2)

alert(`O resto da diviado de, ${n1} por ${n2} e: ${resulatdo}`)
alert(`O resto da diviado de, ${n1} por ${n2} e: ${elevado}`)


