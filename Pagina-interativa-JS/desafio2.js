const etanol = 4.5;

const gasolina = 6;

const combustivel = 'gasolina';

const distancia = 100

let gastoMedio;

let valor;

if (combustivel === 'gasolina') {
    gastoMedio = 10 //km/l
    valor = gasolina * (distancia / gastoMedio) + "$"
} else {
    gastoMedio = 12 //km/l
    valor = etanol * (distancia / gastoMedio) + "$"
}

console.log(valor)