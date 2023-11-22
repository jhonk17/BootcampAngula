const pessoa = {
    nome: "Jhon Santiago",
    idade: 26,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';

console.log(pessoa['nome']);