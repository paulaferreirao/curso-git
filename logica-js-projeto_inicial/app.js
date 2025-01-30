//1. Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo(){
    console.log('Olá, mundo!');
}

olaMundo();

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome(nome) {
    console.log(`Olá, ${nome}!`);    
}

olaNome('Paula');

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobroNumero(numero) {
    return numero * 2;
}

let DobroNumero = calcularDobroNumero(2);
console.log(DobroNumero);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(n1, n2, n3) {
    return (n1+n2+n3)/3;
}

let media = calcularMedia(5, 10, 15);
console.log(media);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrarMaiorNumero(n1, n2) {
    if (n1>n2) {
        console.log(n1);
    } else {
        console.log(n2);
    }
    // return n1 > n2 ? n1 : n2;
}

let maiorNumero = encontrarMaiorNumero(2, 7);
console.log(maiorNumero);

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicarNumero(numero) {
    return numero*numero;
}

let resultado = multiplicarNumero(4);
console.log(resultado);