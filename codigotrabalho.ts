/**
Trabalho da Disciplina de Programação de JavaScript
Turma: 963R
Aluno: Diego Paiva Batista
Matricula: 2024101217
*/

function fVerificarPrimo(num){ // Função para verificar se um número é primo
    if(num<2){
        return false;
    }

    for(let i=num-1; i>=2;i--){
        let resto = num % i;
        if(resto == 0){
            return false;
        }
    }
    return true;
} 

function fImprimir_10_Primeiros_Primos(num){ // Função para imprimir os 10 numeros primos
    let contador = 0;
    let atual = num;
    while(contador < 10){
        if(fVerificarPrimo(atual)){
            console.log("O número [" + atual + "] é primo!");
            contador++;
        }
        atual++;
    }
}

let numero = parseInt(prompt("Digite um numero")); // para digitar qual numero você quer verificar, a partir daqui 10 numeros primos seram feitos

if(fVerificarPrimo(numero)){
    console.log("O número [" + numero + "] é primo!"); // Quando for primo aparecer essa mensagem
} else {
    console.log("O número [" + numero + "] não é primo."); // Quando não for primo aparecer essa mensagem
}

fImprimir_10_Primeiros_Primos(numero + 1);