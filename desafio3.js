/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
-À vista Débito, recebe 10% de desconto;
-À vista no Dinheiro ou PIX, recebe 15% de deconto;
-Em duas vezes, preço normal de etiqueta sem júros;
-Acima de duas vezes, preço normal mais juros de 10%; */

const produto = 100.00;
const tipoDePagamento = 4;

if(tipoDePagamento === 1){
    const precoFinal = (produto - (produto * 0.1));
    console.log('Pagamento no débito com 10% de desconto. Total = ' + precoFinal.toFixed(2));
}
else if(tipoDePagamento === 2){
    const precoFinal = (produto - (produto * 0.15));
    console.log('Pagamento à vista no dinheiro ou pix. Total = ' + precoFinal.toFixed(2));
}
else if(tipoDePagamento === 3){
    const precoFinal = produto / 2;
    console.log('Em duas vezes, sem júros. Total = ' + precoFinal.toFixed(2));
}
else{
    precoFinal = produto + (produto * 0.1);
    console.log('Acima de duas vezes. Preço normal mais júros de 10%. Total = ' + precoFinal.toFixed(2));
}

