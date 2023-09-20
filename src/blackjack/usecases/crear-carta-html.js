/**
 * Metodo que devuelve la imagen de la carta q se le pasa como argumento
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) =>{

    if ( !carta ){
        throw new Error('La crata es obligatoria');
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}