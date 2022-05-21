/* varA = 'A'; // B 
let varB = 'B'; // C
let varC = 'C'; // A

const varTempA = varA;

varA = varB;
varB = varC;
varC = varTempA;

console.log(`${varA} ${varB} ${varC}`);*/


/* **************** OUTRA MANEIRA DE RESOLVER **************** */

let varA = 'A'; // B 
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]; // Mais moderno 

console.log(varA, varB, varC);