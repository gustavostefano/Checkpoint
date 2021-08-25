console.log('----- MENU -----');
console.log('1. Pipoca');
console.log('2. Macarrão');
console.log('3. Carne');
console.log('4. Feijão');
console.log('5. Brigadeiro');
console.log('---------------');

var readlineSync = require('readline-sync');

var op = readlineSync.question("Informe uma opcao:")

var tempo = readlineSync.question("Informe o tempo:")
switch (op) {
  case '1':
    verificarTempo(tempo, 10)
    break;
  case '2':
    verificarTempo(tempo, 8)
    break;
  case '3':
    verificarTempo(tempo, 15)
    break;
  case '4':
    verificarTempo(tempo, 12)
    break;
  case '5':
    verificarTempo(tempo, 8)
    break;
  default:
    console.log('Prato Inexistente');
}
function verificarTempo(tempo, tp_default){
    if (tempo > 3 * tp_default) {
        console.log('Kabumm');
    }
    else if (tempo > 2 * tp_default) {
        console.log('A comida queimou');
    }
    else if (tempo < tp_default) {
        console.log('Tempo Insuficiente');
    }
    else if (tempo == tp_default) {
        console.log('Prato pronto, bom apetite!');
    }
}

