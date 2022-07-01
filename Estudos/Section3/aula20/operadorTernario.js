// condition ? true value : false value

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário VIP.' : 'Usuário NORMAL.';


/*if(pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP.");
} else {
    console.log("Usuário NORMAL.");
}*/

console.log(nivelUsuario);


const userColor = null;
const patternColor = userColor || 'Black';
console.log(patternColor);

/* (ACIMA) Caso userColor seja null, o valor padrão que a constante patternColor receberá será 'Black'. */
