
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, acrescimo){
    return (valor + (valor * acrescimo / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);
const menosPorcentagem = (2000 - (2000 * (10 / 100))); // tirando 10% de 2000
const maisPorcentagem = (2000 + (2000 * (10 / 100))); // acrescentando 10% em 2000

console.log(menosPorcentagem.toFixed(2));
console.log(maisPorcentagem.toFixed(2));