function calculadora() {
    const op = Number(prompt('Escolha uma operação:\n 1 - Soma{+}\n 2 - subtracao{-}\n 3 - multiplicacao{*}\n 4 - divisaoReal{/}\n 5 - dicisaoInteira{%}\n 6 - pontenciação{**}')); 
    console.log(op);

    if (!op || op >= 7){
        alert('Erro - operação invalida!');
        calculadora();
    }else{
    let n1 = Number(prompt ('Digie o primeiro valor'));
    let n2 = Number(prompt ('Digie o segundo valor'));
    let resultado;
    
    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    
    }
    
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }
    
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    
    }
    
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    
    }
    
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    
    }
    
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    
    }
    
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação ?\n 1 - Sim\n 2 - Não' );
       
        if (opcao == 1){
            calculadora();
        }else if (opcao == 2){
            alert('Até logo mais')
        }else {
            alert ('Digite uma opção inválida')
            novaOperacao();
        }
    }
    
    /*if (op == 1){
        soma();
    } else if (op == 2){
        subtracao();
    } else if (op == 3){
        multiplicacao();
    }else if (op == 4){
        divisaoReal ();
    }else if (op == 5){
        divisaoInteira();
    }else if (op == 6){
        potenciacao();
    }*/

    switch (op){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();  
            break;              
    }

}




}
calculadora();