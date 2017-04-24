const https = require('https');
const models = require('./mongoScript');

const movePath = '/api/v2/move/';
const pokePath = '/api/v2/pokemon/';
const numberOfMoves = 639;
const numberOfPokemon = 811;

let options = {
    host: 'pokeapi.co',
    path: '',
    headers: {
        accept: 'application/json'
    }
}

let result = '';

getData = (options, exec) => {
    https.get(options, (response) => {
        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            result += chunk;
        });

        response.on('end', () => {
            result = JSON.parse(result);
            exec(result);
        });

    }).on('error', (e) => {
        console.log('Got error: ' + e.message);
    });
};

let moveToCreate = new models.Move;

for (let i = 1; i <= numberOfPokemon; i++) {
    if (i <= numberOfMoves) {
        options.path = movePath + i + '/';
        getData(options, function exec(data) {
            /*moveToCreate.id = data.id;
            moveToCreat.name = data.names[0].name;
            moveToCreate.power = data.power;
            moveToCreate.accuracy = data.accuracy;
            moveToCreate.priority = data.priority;
            moveToCreate.type = data.type.name;
            moveToCreate.category = data.damage_class.name;
            moveToCreate.description = data.flavor_text_entries[1].flavor_text;*/
        });
        result = '';
        options.path = '';
    }
    options.path = pokePath + i + '/';
    getData(options, function exec(data) {
        console.log(data);
    });
    result = '';
    options.path = '';
    break;
}
