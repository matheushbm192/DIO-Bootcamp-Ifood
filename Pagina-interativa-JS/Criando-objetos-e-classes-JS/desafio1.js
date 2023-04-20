class Pessoa { //o modelo como o objeto pessoas deve ser
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) { //obriga a inserçao dos parametros no mento em que o objeto é instanciado
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    description () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const matheus = new Pessoa('Matheus', 20); //instancia do objeto, obedecendo a classe

const renam = new Pessoa('Renam', 23);



matheus.description();
renam.description();

console.log(matheus);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velho que ${p2.nome}`;
    } else if (p1.idade < p2.idade) {
        return `${p2.nome} é mais velho que ${p1.nome}`;
    } else {
        return `${p2.nome} e ${p1.nome} possuem a mesma idade`;
    }
}

console.log(compararPessoas(matheus, renam));