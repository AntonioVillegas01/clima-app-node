const axios = require( 'axios' );


const getLugarLatLng = async( direccion ) => {

    const encodedUrl = encodeURI( direccion );
    console.log( encodedUrl );


    const instance = axios.create( {
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '74eba54798msh0177376d653b81fp118751jsne8db648c6436' }
    } );

    const resp = await instance.get();
   if ( resp.data.Results.length === 0){
       throw new Error(`No hay resultados para ${direccion}`);
   }
   const data = resp.data.Results[0];
   const city = data.name;
   const lat = data.lat;
   const lng = data.lon;

    return {
        city,
        lat,
        lng
    }
};


module.exports = {
    getLugarLatLng
};
