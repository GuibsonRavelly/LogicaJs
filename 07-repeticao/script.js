//let ano = parseInt(prompt('Digite um ano!'))

// let i = 1

// while(i <= 100){
//      document.write(`${numero} x ${i} = ${numero * i} <br> `)

//      i = i + 1;

//      if(i % 10 === 0){
//           document.write('<hr>')
//      }
// }

// for( let i = 1 ; i <=100; i++){
//      document.write(`${numero} x ${i} = ${numero * i} <br> `);

//      if(i % 10 === 0){
//           document.write( '<hr>');
//      }
// }

// document.write('Saiu do Loop!')


let ano = 1704

while( ano <= 2017){

     if( !( ano % 100 === 0) || (ano % 400 === 0)){
          document.write(ano +'<br>')
     }else{
          document.write(ano + ' não e bissexto<br>')
     }

     ano += 4;
}