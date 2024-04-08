import _ from 'underscore';

// export const miNombre = 'Carlos';

/**
 * 
 * @param {Array<String>} tiposCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    
    if(!tiposEspeciales || !tiposEspeciales.length > 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string')
    
    if(!tiposEspeciales || !tiposEspeciales.length > 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

//export default crearDeck;