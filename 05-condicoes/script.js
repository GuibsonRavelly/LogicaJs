// let n1= parseFloat(prompt('digite sua nota'))
// let n2 = parseFloat(prompt('Digite sua segunda nota'))

// var nota = (n1+n2)/2

// if( nota > 5){
//      alert(`Aluno foi aprovado com a média:${nota} `);
// }else alert(`O aluno foi reprovado com a média: ${nota}`);

// --------------------------------------------------------------------

// let n1= parseFloat(prompt('digite um numero'))
// let n2 = parseFloat(prompt('Digite outro numero'))



// if( n1 ===  n2 ){
//      alert('empate');
// }


 let n1= parseFloat(prompt('digite um numero'))
let n2 = parseFloat(prompt('Digite outro numero'))

 if(n1 === n2 ){
    alert('Deu empate')


}else{
    var randon = parseInt(Math.random() *2)
    alert ('O sortedo foi ' + randon)

    if((randon === 0 && n1 < n2) || (randon === 1  && n1 > n2) ){
        alert('jogador 1 ganhou')
    }else  alert('jogador 2 ganhou')

}

//    console.log(randon);
   
//    if( randon === 0){ 
//     if(n1 < n2){
//         alert('O jogador 1 ganhou')
//     }else{
//         alert('Jogador 2 ganhou')
//     }


//    }else{
//      if(n1 > n2){
//         alert('O jogador 1 ganhou')
//     }else{
//         alert('Jogador 2 ganhou')
//     }




// var randon = parseInt(prompt (Math.random) * 2)
//  if(randon === 0 || randon === 1){
//      alert('Parabéns você ganhou')
//  }else alert('Parannéns você tambem ganhou!')


// let velocidade = parseFloat(prompt('digite sua velocidade'))
// let carro = 'corola'

// if(velocidade > 80 ){
//     alert(`Ativamos o modo combustão do seu,  ${carro} , CUIDADO!`)
// }else{
//     alert(`Eletrecidade mantendo o ${carro} !`)
// }



    
