/**
 * Esta funcion me permite coger una carta del arreglo de forma aleatoria
 * @param {Array<String>} deck 
 * @returns {String} carta 
  */
export const pedirCarta= (deck) => {

    if ((!deck) || ( deck.length == 0)){
        throw new Error('No hay cartas en el deck');
    }
    // const cartaAleatoria = deck.pop();  con esto cogeríamos la ultima y la borraríamos del arreglo
  
    // para hacerlo de forma aleatoria sería:
    const indiceAleatorio = Math.floor(Math.random() * deck.length);
    return deck.splice(indiceAleatorio, 1)[0];
}