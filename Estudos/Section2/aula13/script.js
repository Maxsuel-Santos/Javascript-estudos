/*

Tipos primitivos (imutáveis): string, number, boolean, undefined, null, bigint e symbol.

Referência (mutáveis): array, objetc e function. 

*/

let a = [1, 2, 3];
let b = [...a]; // let b = a;
console.log(a, b);

/* A forma acima [...a], é uma maneira de copiar o valor de uma variável/constante para outra variável/constante, o nome disso é spread (espalhar). Lembrando que o "a" de [...a] é a variável que terá o valor copiado. O spread espalha o valor de algo em outra coisa, para os mais íntimos, copiar o valor. */


const pessoa = {
    nome: "Maxsuel", sobrenome: "Santos", idade: 17
};

const cadastro = {...pessoa};
console.log(cadastro);
