class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calularImc(){
      return  this.peso / (this.altura * this.altura);
    }

    classificarImc(){
       const imc = this.calularImc();
       if (imc < 18.5 ) {
        return (`Ola ${this.nome}, seu IMC é ${imc.toFixed(2)} está abaixo do peso`);
       } else if (imc >= 18.5 && imc < 25) {
        return (`Ola ${this.nome}, seu IMC é ${imc.toFixed(2)} está no peso ideal`);
       } else if (imc >= 25 && imc < 30) {
        return (`Ola ${this.nome}, seu IMC é ${imc.toFixed(2)} está acima do peso`);
       } else if (imc >=30 && imc < 40) {
        return (`Ola ${this.nome}, seu IMC é ${imc.toFixed(2)} é considerado obeso`);;
       } else {
        return (`Ola ${this.nome}, seu IMC é ${imc.toFixed(2)} está com obesidade grave`);;
       }
    }
}

const goku = new Pessoa('Goku', 65, 1.70);
const jose = new Pessoa('josé', 75, 1.75);


console.log(goku.classificarImc());
console.log(jose.classificarImc());


