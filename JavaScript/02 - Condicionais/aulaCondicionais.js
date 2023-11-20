const numero = 1;

const eNumeroPar = (numero % 2) === 0;
console.log(eNumeroPar);

if (numero === 0) {
    console.log('O número é inválido');
} else if (eNumeroPar){
    console.log('Sim');
} else {
    console.log('Não');
}



