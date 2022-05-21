let hours = document.getElementById('hours');

let tempo = new Date();
let hora = tempo.getHours();
let minuto = tempo.getMinutes();
let segundos = tempo.getSeconds();

hours.innerHTML = document.write(`<p>Hora: ${hora}:${minuto}:${segundos}</p>`);
