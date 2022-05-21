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
const pessoa2 = createPerson("Andreza", "Lima", 21);

console.log(`${pessoa1.name} ${pessoa1.lastName} tem ${pessoa1.years} anos.`);

console.log("\n") // ***************

console.log(`${pessoa2.name} ${pessoa2.lastName} tem ${pessoa2.years} anos.`);

/* (ACIMA) Usou uma função para retornar um objeto. */

/* OBS: Os parâmetros recebem os valores dos argumentos. Os parâmetros são as variáveis nos () das funções, enquantos os argumentos são os valores passados na chamada da função. ARGUMENTO É O VALOR PASSADO PARA O PARÂMETRO. ;) */

console.log("\n") // ***************

/* QUANDO O NOME DO ATRIBUTO DENTRO DO OBJETO FOR RECEBER O PARÂMETRO E OS DOIS TIVEREM O MESMO NOME, BASTA VOCÊ POR O NOME DE UM NOME. VEJA ABAIXO: */

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoinha1 = criarPessoa("Max", "Santos", 17);

console.log(`${pessoinha1.nome} ${pessoinha1.sobrenome} é lindo e tem ${pessoinha1.idade} anos de idade.`);


console.log("\n") // ***************


const criarPessoaLinda = {
    nome: "Max", sobrenome: "Santos", idade: 17,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos. Ele é gostosão!!! ;)`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

criarPessoaLinda.fala();
criarPessoaLinda.incrementaIdade();
criarPessoaLinda.fala();
criarPessoaLinda.incrementaIdade();
criarPessoaLinda.fala();

/* this. referencia um objeto (this = esse -> esse.objeto). Funciona dentro do bloco do objeto (this.indice). */

/* ATENÇÃO!!! Fique atendo para separar com vírgula os atributos, funções e etc, como tem acima. */

