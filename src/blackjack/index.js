import _ from 'underscore'
// import { crearDeck as crearNewDeck } from './usecases/crear-deck';   por si se quiere llamar de otra forma
import { valorCarta, pedirCarta, crearDeck, turnoComputadora, crearCartaHTML} from './usecases/index';

let deck = [];
const   tipos =['C','D','H','S'];
const   especiales = ['A','J','Q','K'];
  
// puntos de los jugadores. El ultimo va a ser la computadora
let puntosJugador = 0,
    puntosComputadora = 0;
      
// Referencias del HTML
const   divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComputadora = document.querySelector('#computadora-cartas');
const   puntosHTML = document.querySelectorAll('small');

const   btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');
  
deck = crearDeck(tipos, especiales);
    
// Eventos
btnPedir.addEventListener( 'click', () => {
  
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append(imgCarta);
  
    if ( puntosJugador > 21 ){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    } else if ( puntosJugador === 21 ){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }
})
  
btnDetener.addEventListener( 'click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
})
  
btnNuevo.addEventListener( 'click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);
    // el ultimo jugador del array va a ser siempre la computadora
    // inicializo al array de los puntos de los jugadores
    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});



