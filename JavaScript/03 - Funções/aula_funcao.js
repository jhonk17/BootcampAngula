function escrevaNome (nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('jhon') + ' é de Maior');
    }else {
        console.log('Menor');
    }
}
verificarIdade(18);