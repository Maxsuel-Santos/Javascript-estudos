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

OBS: Use variavelArray.sort(function(a, b){return a-b}) para o método sort() por em ordem crescente os números de um vetor. Ex: nums.sort(function(a, b){return a-b});

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
points.sort(function(a, b){return a-b});
console.log(points);

console.log("\n\n"); // **************************

