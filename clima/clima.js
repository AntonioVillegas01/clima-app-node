const axios = require( 'axios' );


const getClima = async (lat , lng) => {

   const resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a538f7945d32d3fc1553ed96f22d12e0&units=metric`)

    return resp.data.main.temp;
};



module.exports = {
    getClima
};