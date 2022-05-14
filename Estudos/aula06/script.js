const nome = window.prompt("Qual o seu nome? ");

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> <br>`;

document.body.innerHTML += `Seu nome tem <strong>${nome.replace(" ", "").length}</strong> letras. <br>`;

document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br>`;

document.body.innerHTML += `A primeira letra "a" do seu nome é a: <strong>${nome.indexOf("a") + 1}ª</strong> letra de seu nome. <br>`;

document.body.innerHTML += `O último índice de letra "a" do seu nome é: <strong>${nome.lastIndexOf('a')}ª</strong> letra de seu nome. <br>`;

document.body.innerHTML += `As 3 últimas letras de seu nome são: <strong>${nome.replace(" ", "").slice(-3)}</strong> <br>`;

document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(" ")}</strong> <br>`;

document.body.innerHTML += `Seu nome com letras maiúsculas: : <strong>${nome.toUpperCase()}</strong> <br>`;

document.body.innerHTML += `Seu nome com letras minúsculas: : <strong>${nome.toLowerCase()}</strong> <br>`;
