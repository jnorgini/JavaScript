function escrevaSeuNome(nome){
    return 'meu nome é ' + nome;
}


escrevaSeuNome('Juliana');

function testeMaiorIdade(idade){
    if(idade >= 18){
        console.log(escrevaSeuNome('Juliana') + ' sou maior de idade');
    }
    else{
        console.log('Menor de idade');
    }
}

testeMaiorIdade(32);