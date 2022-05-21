/*

************************************

FALSY =>

false = literak (palavra)

0

'', "" e ``

null / undefined

NaN

************************************

OBS: Qualquer valor diferente dos valores acima é verdadeiro.

*/

console.log("Luiz" && NaN && "Maria"); // Retorna o false value (NaN).

/*

QUANDO O || ENCONTRA UMA VALOR/EXPRESSÃO VERDADEIRA, ELE AUTOMATICAMENTE PARA AÍ, NÃO VERIFICA MAIS O RESTO CASO TENHA, POIS NO || SE UM SÓ VALOR OU EXPRESSÃO FOR TRUE, RETORNARÁ TRUE. NO && TAMBÉM APLICA ESSE CONCEITO, CASO TENHA UM VALOR FALSE, QUANDO ESTE FOR ENCONTRADO ENCERRARÁ AUTOMATICAMENTE, POIS SE UM VALOR OU EXPRESSÃO NO && FOR FALSE, TODO O RESTO SERÁ.

*/

console.log("\n"); // **********

const userColor = null;
const defaultColor = 'red';

console.log(userColor || defaultColor); // Usei isso ao invés de uma estrutura condicional.

/* (ACIMA) Verifica se o usuário escolheu ou não uma cor padrão. Caso escolheu, a cor dele será usada, caso não escolheu, a cor padrão será usada. */

console.log("\n"); // **********


const a = 0; // false => valor falso
const b = null; // false => valor falso
const c = "false"; // false => valor falso
const d = false; // false => valor falso
const e = NaN; // false => valor falso

console.log(a || b || c || d || e);
console.log(a && b && c && d && e);


console.log("\n"); // **********


const A = 0; // false => valor falso
const B = null; // false => valor falso
const C = false; // false => valor falso
const D = false; // false => valor falso
const E = NaN; // false => valor falso

console.log(A || B || C || D || E);
console.log(A && B && C && D && E);
console.log(A || B || C || "Maxsuel" || D || E);
console.log(A && "Maxsuel" && B && C && D && E);
