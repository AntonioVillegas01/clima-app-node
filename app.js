const lugar = require( './lugar/lugar' );
const clima = require( './clima/clima' );


const argv = require( 'yargs' ).options( {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
} ).argv;


//clima.getClima( 40.750000, -74.00000 )
//    .then( console.log )
//    .catch( console.log );
//

//argv.direccion
//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

const getInfo = async( direccion ) => {

    try {

        const coords = await lugar.getLugarLatLng( direccion );
        const temp = await clima.getClima( coords.lat, coords.lng );
        return `El clima de ${coords.city} es de ${temp}.`

    } catch( e ) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);