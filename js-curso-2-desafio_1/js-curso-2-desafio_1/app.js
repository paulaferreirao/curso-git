//1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

//2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function cliqueConsole() {
    console.log('O botão foi clicado.');
}

//4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function cliqueAlerta() {
    alert('Eu amo JS');
}

//5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
let cidade
function cliquePrompt() {
    cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

//6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
let soma
let primeiroNumero
let segundoNumero

function cliqueSoma() {
    primeiroNumero = prompt('Digite um número inteiro: ');
    segundoNumero = prompt('Digite outro número: ');
    soma = primeiroNumero + segundoNumero;
    alert(`A soma é: ${soma}`);
}
