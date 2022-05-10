//           012345
let texto = "Hello!";

console.log(texto[4]); // Exibe a letra "o".

console.log(texto.charAt(4)); // Exibe a letra "o." Dessa vez usando o charAt();

/*

*** FUNÇÕES STRING ***

* charAt(); => Exibe um índice específico.

* concat(); => Concatena uma string com a outra.

* indexOf(); => Procura uma string dentro de uma outra string (variável por ex). Funciona com números também, além de string. Retorna o índice. Se você colocar: variavel.indexOf("T", 3); significa que vai procurar o próximo "T" do índice 3 adiante.

* lastIndexOf(); => Semelhante ao indeOf();, porém a única diferença é que este começa do último índice a vai até o índice 0, o oposto de seu irmão indexOf();. O resultado é o mesmo do indexOf(); se usar um só valor e não usar vírgula dentro dos ().

* 

*/


//            0123456789
let textin = "Um T Texto";
console.log(textin.indexOf("T"));
