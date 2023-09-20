/**
 * Conocer el valor de cada carta formato reducido\
 * @param { String } carta
 * @returns { Number } carta. retorna el valor numérico de la carta 
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substr(0, carta.length -1);
    return ( isNaN( valor ) ) ?         
            ( valor === 'A') ? 11 : 10
            : (valor * 1);     
}

/**
 * Conocer el valor de cada carta formato normal
 */
const valorCartaS = ( carta ) => {
    // const valor = carta[0];     // asi cojo el primer elemento de una cadena, de un string
    const valor = carta.substr(0, carta.length -1);
    let puntos = 0;
    if ( isNaN(valor) ){         // si no es un numero
        puntos = ( valor === 'A') ? 11 : 10;

    }else{                       // si es un número
        puntos = valor * 1;     // lo *1 para convertirlo a numero, ya q valor es un string
    }
}