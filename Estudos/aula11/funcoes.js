/* Corpo de uma função:

function nomeFuncao() {

} 

* 1. function => Declara uma função. 

* 2. nomeFuncao() => Nome da função que você dá seguido de ().

* 3. {} => Determina o corpo da função, o bloco de código p/ os + íntimos.

nomeFuncao(); => Chama a função (fora do function).

*/

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const mensagem = saudacao('Max');
console.log(mensagem);

/* OBS: Quando você usa o return e guarda o valor numa variável, não será mostrada a 
mesagem do mesmo, no caso "Bom dia, Max!". Diferente disso, se no lugar do return fosse 
console.log(), seria outro caso, ao guardar o valor na variável mensagem, além de 
guardar o valor, será exibida a mensagem, no caso "Bom dia, Max!". Ou seja, o console.log
() é apressado enquanto o return é frio e calculista. */

console.log("\n"); // **************

function soma(n1, n2) {
    return n1 + n2;
}

console.log( soma(7, 3) );
console.log( soma(9.6, 3.14) );
console.log( soma("a", "b") );

/* As funções são resutiliáveis. O que tá dentro da função está protegido, ou seja, o 
programa fora do bloco da função ({}) não acessa os dados da função propriamente dita. 
Você pode dar o mesmo nome de uma variável fora da function que tem na function, por 
exemplo: duas variáveis com o mesmo nome no mesmo "bloco de código" não pode, mas as 
mesmas variáveis em blocos de códigos diferentes é válido.*/

console.log("\n"); // **************

/* OBS FODA: Em uma função, quando a Engine do JavaScript (node) detectar o return, nada mais da função será exibida, ou seja, o return é a última coisa declarada na função, quando chega nele a função acaba. Mas você pode usar em condições e ter várias estruturas de if-else cada uma com return, não seria a última coisa declarada, mas como uma condicional só uma delas é satisfeita, o return será a última coisa do mesmo jeito. */

function saudacao2(nome) {
    return `Bom dia, ${nome}!`;
    console.log(`E ai, ${nome}!`);
}

const mensagem2 = saudacao2('Max');
console.log(mensagem);

/* Veja o teste acima. No vs code, a linha 52 (console.log("E ai");) fica até com uma cor diferente, e uma mensagem para remover a linha com o código inacessível, ou seja, não será exibido, então não tem como acessá-lo/usá-lo. */

console.log("\n"); // **************

function soma2(x = 1, y = 1) {
    return x + y;
}

console.log( soma2() ); // 2
console.log( soma2(4) ); // 5
console.log( soma2(6, 9) ); // 15
console.log( soma2(9, 17, 66) ); // 26
console.log( soma2(0, 17) ); // 17

/* 

* LINHA 66 => Não foi passado nenhum valor, mas na função, x e y tem valores padrões de 1, ou seja, se não for passado um valor, ambos terá o valor 1. A soma do valor padrão deles foi 2.

* LINHA 67 => O valor de x foi passado, mas o de y não. O valor de x que é 4 será somado mais o valor padrão de y que é 1. O valor padrão de x que é 1 foi descartado porque o mesmo recebeu valor na chamada da função, diferente de y.

* LINHA 68 => Ambos os valores foram passados, de x e y. Agora, os valores padrões são desconsiderados e os valores colocados na chamada da função serão somados.

* LINHA 69 => 3 valores foram passados, o de x, y e um que não possui parâmentros na função soma2(). Nesse caso, os valores de x e y serão somados, enaquanto o outro será descartado.

* LINHA 70 => x foi 0 e y 17. 0 + 17 = 17.

*/

console.log("\n"); // **************

const raiz = function(n) {
    return n ** .5;
};

console.log( raiz(9) );
console.log( raiz(81) );
console.log( raiz(225) );
console.log( raiz(18).toFixed(2) );

/* (ACIMA) Essa é outra forma de declarar funções. nesse caso, o valor de return será retornado na constante raiz. */

console.log("\n"); // **************

const dobro = (n) => { // Arrow function
    return n * 2;
};

/* const dobro = n => n * 2; */

console.log( dobro(9) );
console.log( dobro(81) );
console.log( dobro(225) );
console.log( dobro(18) );

/* (ACIMA) Essa é uma outra forma de declarar funções, é uma forma mais recente (ES6+), você não usa a palavra function mais, mais usa um => para indicar um função. Você usa isso logo depois do parâmetro e antes da chave de abertura. O nome arrow function é dado para essa forma, justamente por => parecer um arrow, na tradução: seta. O arrow function veio para simplificar, a função toda acima pode ficar sem as chaves, o return e os parênteses do parâmetro. Ficaria assim: const dobro = n => n * 2;*/

console.log("\n"); // **************

const metade = n => n / 2; // Função seta / Arrow function

console.log( metade(9) );
console.log( metade(81) );
console.log( metade(225) );
console.log( metade(18) );

