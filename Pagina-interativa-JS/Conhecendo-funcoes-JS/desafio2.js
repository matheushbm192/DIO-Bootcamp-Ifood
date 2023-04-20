function formaDePgamento(num) {

    if (num === 1) {
        return 0.9;
    } else if (num === 2) {
        return 0.85;
    } else if (num === 3) {
        return 1;
    } else {
        return 1.10;
    }

}

function preco(produto, num) {

    return produto * formaDePgamento(num);
}

console.log(preco(10, 2));