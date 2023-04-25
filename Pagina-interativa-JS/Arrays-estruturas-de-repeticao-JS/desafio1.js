const notas = [];

notas.push(7);
notas.push(6);
notas.push(1);
notas.push(3);
notas.push(9);
notas.push(9);
notas.push(5);


let soma = 0;

for (i = 0; i < notas.length; i++ ) {
    soma = soma + notas[i];
    
}
console.log(soma);
const media = soma / notas.length;
console.log(media);
