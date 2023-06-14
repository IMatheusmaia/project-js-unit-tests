/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  let cont = 0;
  myArray.push(cont);
  for (let counter = 0; counter < 4; counter += 1) { 
    for (let newCounter = 2; newCounter < 4; newCounter += 1) {
      myArray.push(newCounter);
    }
    cont += 1;
    myArray.push(cont);
  }
  return myArray.filter((num) => num < 4);
};
myCounter();

module.exports = myCounter;
