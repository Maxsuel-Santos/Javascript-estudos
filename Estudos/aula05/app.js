/*

*** FUNÇÕES STRING ***

* charAt(); => Exibe um índice específico.

* concat(); => Concatena uma string com a outra.

* indexOf(); => Procura uma string dentro de uma outra string (variável por ex). Funciona com números também, além de string. Retorna o índice. Se você colocar: variavel.indexOf("T", 3); significa que vai procurar o próximo "T" do índice 3 adiante.

* lastIndexOf(); => Semelhante ao indeOf();, porém a única diferença é que este começa do último índice a vai até o índice 0, o oposto de seu irmão indexOf();. O resultado é o mesmo do indexOf(); se usar um só valor e não usar vírgula dentro dos ().

* match(/[a-z]/g); => Retorna um array de a-z das letras minúsculas de uma string (encontra os termos de a-z).

* search(); => Encontra um termo específico. Ex: search(\x\); -> Procura o "x".

* replace(); => Substitui um termo por outro. Ex: console.log(variavel.replace("troca esse", "por esse"));

* P.S: Você pode usar expressões regulares ao invés de um texto dentro de aspas. Ex: "Esse texto" é o mesmo que /Esse texto/. Você usa as barras. Usa isso nas funções strings acima.

* length => Retorna o tamanho da string, ou seja, a quantidade de índices/caracteres.

* slice(); => Fatia uma determinada string. Você escolhe a partir de quais índices começam e terminam a string. Ex: variavel.slice(2, 6); -> Começa no índice 2 e termina no 6 (OBS: O valor do índice 6 não será contabilizado, será apenas até o índice 5, o 6 é onde para sem mostrar o valor).

*/ 




/* *********************************************************************************** */

//           012345
let texto = "Hello!";

console.log(texto[4]); // Exibe a letra "o".

console.log(texto.charAt(4)); // Exibe a letra "o." Dessa vez usando o charAt();

//            0123456789
let textin = "Um T Texto";
console.log(textin.indexOf("T"));
console.log(textin.replace("T ", ""));


let classico = 'O rato roeu a roupa do rei de roma enquanto o coitado estava dormindo.';
console.log('\n\n', classico.replace(/o/g, "#"), classico.length);