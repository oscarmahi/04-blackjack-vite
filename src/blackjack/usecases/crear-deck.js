import _ from 'underscore';

/**
   * Esta funcion crea una nueva baraja, un nuevo deck
   * @param {Array<String>} tiposCarta. Ejemplo ['C','D','H','S']
   * @param {Array<String>} tiposEspeciales. Ejemplo ['A','J','Q','K']
   * @returns {Array<String>} deck new
   */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if ((!tiposCarta) || (tiposCarta.length === 0)){
        throw new Error('tiposDeCarta es un dato obligatorio, como un arreglo de string.');
    }

    if ((!tiposEspeciales) || (tiposEspeciales.length === 0)){
        throw new Error('tiposEspeciales es un dato obligatorio, como un arreglo de string.');
    }

    let deck = [];
  
    for(let i = 2; i <= 10; i++){
        for (let tipo of tiposCarta){
            deck.push(i + tipo );
        }
    }
    for (let tipo of tiposCarta){
        for (let especial of tiposEspeciales){
            deck.push( especial + tipo );
        }
    }
    deck = _.shuffle(deck);
    return  deck;    // esto es usando underscore, para hacer aleatorio el arreglo
}

