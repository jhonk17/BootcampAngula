const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorvalorEncontrado = 0

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorvalorEncontrado) {
        maiorvalorEncontrado = numeroSorteado
    }
}

print(maiorvalorEncontrado);
