/*

O que separa um if de outro é um if.

OBS: Se numa estrutura consicional houver dois IFs que tem valor verdadeiro, o primeiro if será executado. O resto da estutura consdicional será ignorada. Atente-se com erros de lógica, pois dois IFs retornarem verdadeiro na teoria pode ser um erro.

*/

let num = 7;

if(num > 0 && num <= 7) {
    console.log("0 a 7.");
} else if(num > 7) {
    console.log("Acima de 7.");
} else {
    console.log("Abaixo de 0.");
}

num = null;

if(!num) {
    console.log("Valor inválido.");
} else {
    console.log("Valor válido.");
}

console.log("... AQUI VAI O RESTO DO CÓDIGO.")

/* (ACIMA) Note que um if é diferente do outro, não pertencem ao mesmo bloco, o que separa uma estrutura condicional de outra é justamente o if, já que uma estrutura condicional só suporta um único if, mas pode suportar vários else if e/ou e apenas um só else. */
