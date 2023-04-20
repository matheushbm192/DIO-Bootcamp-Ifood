class Carros {
    marca;
    cor;
    distanciaPorLitro;

    constructor (marca, cor, distanciaPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.distanciaPorLitro = distanciaPorLitro;
    }

    valorGasto (km, preco) {
        return preco * (km / this.distanciaPorLitro);
    }

}
const civic = new Carros('honda', 'Azul', 12);
console.log(civic.valorGasto(70, 5));

const palio = new Carros('Fiat', 'Preto', 10);
console.log(palio.valorGasto(70, 5));