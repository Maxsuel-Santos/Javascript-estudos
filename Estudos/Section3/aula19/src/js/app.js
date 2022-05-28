// IMC = peso / altura ** 2 ou IMC = peso / altura * altura 

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const result = document.querySelector(".result");
const calcular = document.querySelector("#calcular");

calcular.addEventListener("click", function() {
    
    const imc = peso.value / (altura.value ** 2);

    if(imc < 18.5) {
        result.innerHTML = `<p>ABAIXO DO PESO => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#ff8800"; 
        result.style.color = "#fff";
    } else if(imc < 25) {
        result.innerHTML = `<p>NORMAL => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#00ff2f"; 
        result.style.color = "#fff"; 
    } else if(imc < 30) {
        result.innerHTML = `<p>ACIMA DO PESO => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#ff4400"; 
        result.style.color = "#fff"; 
    } else if(imc < 35) {
        result.innerHTML = `<p>OBESIDADE 1 => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#ff1900"; 
        result.style.color = "#fff"; 
    } else if(imc < 40) {
        result.innerHTML = `<p>OBESIDADE 2 => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#ff0037"; 
        result.style.color = "#fff"; 
    } else if(imc > 40) {
        result.innerHTML = `<p>OBESIDADE 3 => IMC: <strong>${imc.toFixed(2)}</strong></p>`;
        result.style.background = "#ff0000"; 
        result.style.color = "#fff"; 
    } else {
        result.innerHTML = `<p>DADOS INVÁLIDOS! TENTE NOVAMENTE.</p>`;
        result.style.background = "#fffb00"; 
        result.style.color = "#000"; 
    }
    
});
