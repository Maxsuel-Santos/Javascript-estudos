// Não recarregar a página quando o forms for enviado para não perder os dados.

const form = document.querySelector(".form");
const nome = form.querySelector(".nome");
const sobrenome = form.querySelector(".sobrenome");
const peso = form.querySelector(".peso");
const altura = form.querySelector(".altura");
const viewResult = document.querySelector("#content");

const people = [];

function dontReload() {

    form.addEventListener("submit", function getEventForm(event) {
        event.preventDefault(); // Evitar padrão.
        viewResult.innerHTML = ""; // Limpar a tag section p/ exibir o resultado.

        // Objeto adicionado no array.
        people.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value, 
            altura: altura.value
        });

        console.log(people); // Exibir no console.

        /* Exibir no html */
        viewResult.innerHTML = `<p><strong>Nome:</strong> ${nome.value} <br> <strong>Sobrenome:</strong> ${sobrenome.value} <br> <strong>Peso:</strong> ${peso.value} <br> <strong>Altura:</strong> ${altura.value}</p>`;
    });

}
