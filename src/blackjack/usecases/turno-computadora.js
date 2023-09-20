import { crearCartaHTML, pedirCarta, valorCarta } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos  puntos minimos q la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML  HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  HTML para mostrar las cartas
 * @param {Array<String} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( !puntosMinimos ){
        throw new Error('puntosMinimos es necesario');
    }    
    if ( !puntosHTML ){
        throw new Error('puntosHTML es necesario');
    }    
    if ( !deck ){
        throw new Error('El deck es necesario');
    }

    let puntosComputadora = 0;

    do{
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append(imgCarta);

        if ( puntosMinimos > 21 ){
            break;
        }
  
    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {        
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana, han empatado ambos Jugadores.');
        } else if ( puntosMinimos > 21 ){
            alert('La Computadora ha ganado el juego')
        } else if ( puntosComputadora > 21 ){
            alert('El Jugador1 ha ganado el juego');
        } else {
            alert('La Computadora ha ganado el juego');
        }
    }, 100);

}
