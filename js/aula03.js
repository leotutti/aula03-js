let numeroSorteado = parseInt(Math.random()*5);
let numeroSorteado2 = parseInt(Math.random()*5);
console.log(`Número sorteado = ${numeroSorteado}`); 

// Primeiro Exemplo
// módulo pra saber se é par ou impar - 0 = par; 1 = impar
if(numeroSorteado % 2 === 0){
    console.log('O número é par');
    
} else {
    console.log('O número é impar');
    
}

// Exibir o próximo e o anterior número
let proximoNumero = numeroSorteado +1;
let anteriorNumero = numeroSorteado -1;
console.log(`Próximo número = ${proximoNumero}`);
console.log(`Número anterior = ${anteriorNumero}`);

numeroSorteado++;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado--;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado+=10;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado-=10;
console.log(`Novo número = ${numeroSorteado}`);

// Sortear dois números e exibir o maior deles
console.log(numeroSorteado, numeroSorteado2);

if(numeroSorteado > numeroSorteado2){
    console.log(`Maior número = ${numeroSorteado}`);
    
} else if (numeroSorteado2 > numeroSorteado) {
    console.log(`Maior número = ${numeroSorteado2}`);
    
} else {
    console.log(`Os números são iguais`);
    
}

// MEU CÓDIGO
// let valorSorteado = parseInt(Math.random()*10001);
// let rendimento = 0.05;

// if(valorSorteado < 2000){
//     rendimento = valorSorteado * rendimento
//     console.log(`O valor sorteado é = ${valorSorteado}, o rendimento é = ${rendimento} e o valor sorteado somado com o rendimento é = ${valorSorteado + rendimento}`);
    
// } else if (valorSorteado <4000) {
//     let rendimento = 0.10;
//     rendimento = valorSorteado * rendimento
//     console.log(`O valor sorteado é = ${valorSorteado}, o rendimento é = ${rendimento} e o valor sorteado somado com o rendimento é = ${valorSorteado + rendimento}`);

// } else if (valorSorteado <6000) {
//     let rendimento = 0.15;
//     rendimento = valorSorteado * rendimento
//     console.log(`O valor sorteado é = ${valorSorteado}, o rendimento é = ${rendimento} e o valor sorteado somado com o rendimento é = ${valorSorteado + rendimento}`);

// } else if (valorSorteado <8000) {
//     let rendimento = 0.20;
//     rendimento = valorSorteado * rendimento
//     console.log(`O valor sorteado é = ${valorSorteado}, o rendimento é = ${rendimento} e o valor sorteado somado com o rendimento é = ${valorSorteado + rendimento}`);
    
// } else {
//     let rendimento = 0.25;
//     rendimento = valorSorteado * rendimento
//     console.log(`O valor sorteado é = ${valorSorteado}, o rendimento é = ${rendimento} e o valor sorteado somado com o rendimento é = ${valorSorteado + rendimento}`);
    
// }

// código do professor
let valor = parseInt(Math.random()*10001)
let rendimento = 0;
let valorTotal = 0;

// variáveis que vão receber valor começam com 0

if(valor <=2000){
    rendimento = valor * 0.05;
    valorTotal = valor + rendimento;
} else if(valor <=4000){
    rendimento = valor * 0.10;
    valorTotal = valor + rendimento;
} else if(valor <=6000){
    rendimento = valor * 0.15;
    valorTotal = valor + rendimento;
} else if(valor <=8000){
    rendimento = valor * 0.20;
    valorTotal = valor + rendimento;
} else {
    rendimento = valor * 0.25;
    valorTotal = valor + rendimento;
}

// colocar a mensagem em todas as condicionais é redundante, só colocar no final depois do código

console.log(`Valor inicial = ${valor.toFixed(2)}`);
console.log(`Valor do rendimento = ${rendimento.toFixed(2)}`);
console.log(`Valor total = ${valorTotal.toFixed(2)}`);

