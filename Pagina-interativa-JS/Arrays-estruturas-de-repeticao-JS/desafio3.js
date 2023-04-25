const lista = [4,4,4,5,3,6,6,6,5,55,4];
let isPar;
for ( i = 0; i < lista.length; i++) {
 
    isPar =  0 === (lista[i] % 2)
    if (isPar) {
        console.log(lista[i])
    }
}