function escreverMeuNome (nome) {
    return console.log('Meu nome é ' + nome);
}

escreverMeuNome('Matheus');

function maiorDeIdade (idade) {
    if (idade >= 18) {
        return "Você é maior de Idade"
    } else {
        return "Você é menor de Idade"
    }
}

console.log(maiorDeIdade(17))