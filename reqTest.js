const http = require('http');
//const $ = require('jQuery');

const movePath = '/api/v2/move/';
const pokePath = '/api/v2/pokemon/';

let options = {
    host: 'pokeapi.co',
    path: movePath + '1/',
    headers: {
        accept: 'application/json'
    }
};

let result = "";

http.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
        result += chunk;
    });
    
    response.on('end' , () => {
        console.log(result);
        result = JSON.parse(result);
        console.log(result);
    });

}).on("error", (e) => {
    console.log("Got error: " + e.message);
});

/*$.getJSON(movePath + '1/', (data) => {
    console.log(data);
});*/