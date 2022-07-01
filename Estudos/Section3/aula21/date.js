// 60 * 60 * 24 * 1000 => 1 dia em milésimos

/*

const data = new Date();

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // 0 janeiro até 11 dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 domingo até 6 sábado

*/

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function dataFormat(data) {
    const dia = leftZero( data.getDate() );    
    const mes = leftZero( data.getMonth() + 1 );    
    const ano = leftZero( data.getFullYear() );    
    const hora = leftZero( data.getHours() );    
    const min = leftZero( data.getMinutes() );    
    const seg = leftZero( data.getSeconds() );
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = dataFormat(data);
console.log(`\n\n${dataBrasil}\n`);
