/* 1 - Crie uma classe para comparar carros.
Os carros possuem marca, uma cor e um gasto médio de combustível por quilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calculoGastoPercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedio * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(uno.calculoGastoPercurso(70,5).toFixed(2));
console.log(palio.calculoGastoPercurso(70,5).toFixed(2));

