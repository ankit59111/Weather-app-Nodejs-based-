const request = require('request');
const yargs = require('yargs');
let address = encodeURIComponent(yargs.argv.address);
request ({
    //geocoding key: AIzaSyCpdYxsQRwg0jtjTC6UEM3w37gaBU_p_6Y
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCpdYxsQRwg0jtjTC6UEM3w37gaBU_p_6Y`,
    JSON:true
} ,(error , response, body) => {
    if(error){
        console.log(`not able to connect with the server`);
    }else if(JSON.parse(body).status === 'ZERO_RESULTS'){
        console.log(`invalid address`);
    }else if(JSON.parse(body).status === 'OK'){

        console.log(JSON.parse(body).results[0].formatted_address);
        console.log(`latitude :${ JSON.parse(body).results[0].geometry.location.lat}`);
        console.log(`longitude: ${JSON.parse(body).geometry.location.lng}`);
    }
});

