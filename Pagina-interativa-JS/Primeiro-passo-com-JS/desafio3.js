const nota1 = 6;

const nota2 = 3;

const nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;
media;
if (media < 5) {
    console.log('Reprovado: ', media.toFixed(2));
} else if (media > 5 & media < 7) {
    console.log('Recuperação: ', media.toFixed(2));
} else {
    console.log('Passou de semestre: ', media.toFixed(2));
}