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
