/* 

=> NÚMEROS EM JS

* toString() => Converte uma variável numérica para number (Ex: variavel.toString();).

* toString(2) => Converte uma variável numérica para binária (Ex: variavel.toString(2);).

* toFixed() => Arredonda um número. Dentro dos parênteses você coloca a quantidade de casas decimais que você quer (Ex: variavel.toFixed(2); -> 2 casas decimais).

* Number.isInteger() => Retorna em true (1) ou false (-1) se uma número é inteiro ou não. Dentro dos parênteses você põe a variável ou o número.

* Number.isNaN() => Verifica se o número ou a operação é inválida. Retorna em true (1) quando tem erro ou false (-1) quando não tem erro. NaN = Not a Number = não é um número.

* Number(variavel.toFixed(2)) => Graças ao padrão IEEE 754-2008, há pequenas imprecisões na soma de números decimais, como 0.7 + 0.1 que seria igual a 0.8, mas na verdade é 0.79999.... Usa isso então para fazer com que a conta não tenha imprecisão, transformando para number (float) e fixando duas casas decimais.

* ((variavel1 * 100) + (variavel2 * 100)) / 100; => Outra forma de acabar com as imprecisões nas somas de números decimais. No lugar das variáveis pode ser números também. Esse é um meio mais complexo. Dê preferência ao modo anterior a este.

*/

/*let num = 1500;

console.log(num.toString(2));*/

let n1 = .7;
let n2 = .1;

n1 += n2; // .8
n1 += n2; // .9
n1 += n2; // 1.0

n1 = Number(n1.toFixed(2));

console.log(n1);
console.log(Number.isInteger(n1));
