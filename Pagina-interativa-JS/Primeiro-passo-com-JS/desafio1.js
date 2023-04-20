function valorDaViagem (precoCombus, kmPorLitro, distancia) {
    let valor = precoCombus *( distancia / kmPorLitro );
   
    return valor + "$";
}


console.log(valorDaViagem(5.79, 12, 1580));