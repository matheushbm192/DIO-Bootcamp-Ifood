const produto = 10;
let preco;
let formaPagamento = 'quatro vezes';

if (formaPagamento === 'Debito') {
    preco = produto * 0.90;
} else if (formaPagamento === 'Dinheiro' | formaPagamento === 'Pix') {
    preco = produto * 0.85;
} else if (formaPagamento === 'Duas vezes') {
    preco = produto;
} else {
    preco = produto * 1.10
}
console.log(preco + '$')