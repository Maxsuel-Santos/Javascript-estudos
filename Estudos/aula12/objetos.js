/* OBJETOS

* Os objetos são criados usando as chaves. Os objetos servem para encrutar o trabalho, por exemplo: você quer cadastrar os dados de uma pessoa, você para isso cria uma variável para o nome, outra para a idade, outra para o cpf, outra para o rg e outra para cor de pele. Ao total totalizaram 5 variável. Se usar objetos (POO), você criará uma pessoa e dará os atributos a ela: nome, idade, cpf, rg e cor. */

const pessoa = {
    nome: "Maxsuel Santos",
    idade: 17,
    cpf: "12345678901",
    rg: "123456789",
    cor: "branca"
};

console.log( pessoa.nome );
console.log( pessoa.idade );
console.log( pessoa.cpf );
console.log( pessoa.rg );
console.log( pessoa.cor );

/* (ACIMA) Esse é o jeito mais vagabundo de se criar um objeto. */

console.log("\n") // *********************

function createPerson(name, lastName, years) {
    return {
        name: name,
        lastName: lastName,
        years: years
    };
}

const pessoa1 = createPerson("Maxsuel", "Santos", 17);

console.log(pessoa1.name);
console.log(pessoa1.lastName);
console.log(pessoa1.years);

/* (ACIMA) Usou uma função para retornar um objeto. */

/* OBS: Os parâmetros recebem os valores dos argumentos. Os parâmetros são as variáveis nos () das funções, enquantos os argumentos são os valores passados na chamada da função. ARGUMENTO É O VALOR PASSADO PARA O PARÂMETRO. ;) */

