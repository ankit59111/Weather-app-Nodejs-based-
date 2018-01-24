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
           const latitude = JSON.parse(body).results[0].geometry.location.lat;
           const longitude = JSON.parse(body).results[0].geometry.location.lng;
        request({
            url:`https://api.darksky.net/forecast/a52d3b8d259d073d0f0c0f2a97bf5432/${latitude},${longitude}`,
            JSON:true
        },(error,response,body)=>{
            if(error) {
                console.log('not able to connect with server');
            }else {
                const temperature = JSON.parse(body).currently.temperature;
                console.log('temperature: '+ tempe);
            }
        });
        console.log(JSON.parse(body).results[0].formatted_address);
        console.log(`latitude :${ JSON.parse(body).results[0].geometry.location.lat}`);
        console.log(`longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
    }
});

