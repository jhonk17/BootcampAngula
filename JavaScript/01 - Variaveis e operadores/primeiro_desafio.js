const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distancia = 1977;

const litrosConsumidos = distancia / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log('R$', valorGasto.toFixed(2));