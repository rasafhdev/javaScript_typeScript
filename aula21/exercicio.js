let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');

/* Convertendo e reatribuindo os valores, minha solução
num1 = parseInt(num1);
num2 = parseInt(num2);
*/

num1 = Number(num1);
num2 = Number(num2);

// Realizando a soma
const soma = num1 + num2;

// Exibindo o resultado
alert(`${num1} + ${num2} = ${soma}`);
