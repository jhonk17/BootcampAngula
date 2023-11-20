const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 12;
const distancia = 1977;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distancia / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O preço do Etanol é R$', valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O preço da Gasolina é R$', valorGasto.toFixed(2));
}

