/* 

ARRAYS - BÁSICO

O JavaScript não te restringe, então você pode por vários tipos de valores diferentes em um array, como um nome, um número e um boolean. Mas evite fazer isso, coloque os mesmos tipos de dados em um array (Number, String, Boolean, Null, Undefined...).

OBS: No JavaScript, todo array é um objeto.

* length => Retorna o tamanho de uma variável/array/vetor. No caso do array, retornará a quantidade de índices que o mesmo possui, separados por vírgulas (alunos = [1, 2, 3, 4] = 4 índices).

* .push() => Adiciona um elemento no final do array, ou seja, o valor X que você quer colocar no array usando o push() será adicionado no último índice.

* .unshift() => Adiciona um elemento no começo do array, ou seja, o valor X que você quer colocar no array usando o unshift() será adicionado no primeiro índice.

* .pop() => Remove o valor do último índice. Você pode armazenar o valor que foi removido em uma variável. Ex: const removido = alunos.pop(); -> O valor removido foi armazenado na variável 'removido'.

* .shift() => Remove o valor do primeiro índice. Você pode armazenar o valor que foi removido em uma variável. Ex: const removido = alunos.shift(); -> O valor removido foi armazenado na variável 'removido'.

* delete => Deleta um índice em específico. Porém o índice fica vazio, sem valor. Ex: delete alunos[1]; -> Deletou o valor do índice 1 do array alunos.

* instanceof Array => Retorna se algo é um array. Ex: console.log(alunos instanceof Array);

* .sort() => Retorna os valores do array (números e/ou strings) em ordem crescente. Sobrescreve a matriz original.

OBS: Use variavelArray.sort(function(a, b){return a-b}) para o método sort() por em ordem crescente os números de um vetor. Ex: nums.sort(function(a, b){return a-b}); . Use isso caso o .sort() não resolva.

* .reverse() => Retorna os valores do array (números e/ou strings) em ordem decrescente. Sobrescreve a matriz original.

*/

//                 0       1        2
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[0]); // Luiz
console.log(alunos[1]); // Maria 
console.log(alunos[2]); // João

console.log("\n\n"); // **************************

console.log(alunos[0][0]); // L
console.log(alunos[1][3]); // i 
console.log(alunos[2][4]); // Undefined => Não possui índice 4 no nome do índice 2 do array.

console.log("\n\n"); // **************************

alunos[0] = "Eduardo"; // 'Eduardo' sobstituirá 'Luiz'
console.log(alunos);

console.log("\n\n"); // **************************

alunos[3] = "Carol"; // 'Carol' foi adicionada no índice 3 que não existia e passou a existir.
console.log(alunos);

console.log("\n\n"); // **************************

console.log(alunos.length);

console.log("\n\n"); // **************************

alunos.push("Maxsuel");
alunos.push("Fábio");
console.log(alunos);

console.log("\n\n"); // **************************

alunos.unshift("Mariana");
console.log(alunos);

console.log("\n\n"); // **************************

alunos.pop();
const removido = alunos.pop();
console.log(alunos);
console.log(removido);

console.log("\n\n"); // **************************

alunos.shift();
const removido2 = alunos.shift();
console.log(alunos);
console.log(removido2);

console.log("\n\n"); // **************************

delete alunos[1];
console.log(alunos);
console.log(alunos[1]);

console.log("\n\n"); // **************************

console.log(typeof alunos); 
console.log(alunos instanceof Array); // É ou não é um array?

console.log("\n\n"); // **************************

const alf = ["A", "H", "U", "M", "B"];
alf.sort();
console.log(alf);
alf.reverse();
console.log(alf);

console.log("\n\n"); // **************************

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // points em ordem crescente (números). 
console.log(points);

console.log("\n\n"); // **************************

/*  

const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.

*/
