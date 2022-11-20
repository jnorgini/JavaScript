/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg e 1.75 de altura e peça ao José para dizer o valor do seu IMC  */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    IMC(){
       return this.peso / (this.altura * this.altura);
    }

    classifiqueIMC(){
        const valor = this.IMC();
        if(valor < 18.5){
            return ('Abaixo do peso');
        }
        else if(valor >= 18.5 && valor < 25){
            return ('Peso normal');
        }
        else if(valor >= 25 && valor < 30){
            return ('Acima do peso');
        }
        else if(valor >= 30 && valor < 40){
            return ('Obesidade');
        }
        else{
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
const juliana = new Pessoa('Juliana', 53, 1.69);

console.log(jose.nome + ' tem IMC de: ' + jose.IMC().toFixed(2) + ' - ' + jose.classifiqueIMC());
console.log(juliana.nome + ' tem IMC de: ' + juliana.IMC().toFixed(2) + ' - '+ juliana.classifiqueIMC());