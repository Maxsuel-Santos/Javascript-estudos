const num = Number(prompt("Digite um valor: "));

const numeroTitulo = document.getElementById("numeroTitulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = ''; // Zera o valor que tiver na tag
numeroTitulo.innerHTML = `${num}`;

texto.innerHTML += `<p>Raíz quadrada: ${Math.sqrt(num).toFixed(2)}</p>`; // num ** .5
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
