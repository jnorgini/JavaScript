/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - preço do combustível;
2 - gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar a viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 500;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log('O valor gasto em combustível na viagem é: R$ ' + valorGasto.toFixed(2));