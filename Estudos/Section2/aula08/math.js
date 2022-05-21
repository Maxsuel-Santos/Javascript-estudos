/* 

=> OBJETO MATH

* Math.floor() => Arredonda um valor para baixo. Ex: 9.54578 -> 9

* Math.ceil() => Arredonda um valor para cima. Ex: 9.54578 -> 10

* Math.round() => Arredonda um valor para o inteiro mais próximo. Ex: 9.54578 -> 10. 9.4765 -> 9. Se passa da metade arredonda pra cima. Se não passa da metade, arredonda para baixo. Se está no meio termo, arredonda para cima.

* Math.max() => Retorna o maior valor. Pode ser usado variáveis ou números dentro dos parênteses que será retornado o maior valor.

* Math.min() => Retorna o menor valor. Pode ser usado variáveis ou números dentro dos parênteses que será retornado o menor valor.

* Math.random() => Gera valores aleatórios entre 0 e 1, sendo que o 0 e 1 não será incluído, ou seja, será retornado do 0.01 até o 0.99. Ex: 0.4682375691797181797151671.

* Math.PI => Retorna o valor de pi (3.141592...).

* Math.pow() => Potenciação. Ex: Math.pow(base, expoente);. 
OBS: Existem o operador de potência ** no JavaScript, então fica a seu critério usar o pow() ou não. Não há tanta necessidade se já tem um operador pra isso.

* Math.sqrt() => Retorna a raíz quadrado de um número/variável.
OBS: Você pode obter a raíz quadrada de outra forma:
    -> variavel ** .5
    -> variavel ** (1/2)

OBS: No JS a divisão por zero (0) é válida, gerando um tipo infinity como resultado, ou seja, infinito, uma vez que o resultado é enooooooorrrmeeee. Fique atento(a)!

* BÔNUS: Number.isInteger(); => Retorna em true (1) ou false (-1) se um valor bruto ou proveniente de uma variável/constante é inteiro ou não (dentro dos parênteses vai a variável ou o valor).

*/

let n = 9.5;
console.log(Math.round(n));

//

let n1 = 51;
let n2 = 925;
let n3 = 08;
let n4 = 48498;
console.log(Math.max(n1, n2, n3, n4));
console.log(Math.min(n1, n2, n3, n4));

//

//for(let i = 0; i < 100; i++) {
    const alet = Math.random() * 11; // 0 a 10
    // Pode por:  Math.round(Math.random() * 11);
    console.log(alet);
    console.log(alet.toFixed(0)); // Sem casas decimais, porém ocorre arredondamento automático (Math.round();).
    console.log(Math.round(alet));
//}
