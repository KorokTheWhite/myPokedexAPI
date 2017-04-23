const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017');

const moveSchema = new mongoose.Schema({
    number: Number,
    power: Number,
    pp: Number,
    accuracy: Number,
    description: String,
    tm: [{
        gen: Number,
        number: Number
    }]
});

const pokemonSchema = new mongoose.Schema({
    nDexNumber: Number,
    name: String,
    type1: String,
    type2: String,
    ability: [String],
    hiddenAbility: String,
    evolutionLine: [{
        nDexNumber: Number,
        isThisPokemon: Boolean,
        evolveHow: String
    }],
    genderRatio: [Number],
    mega: Boolean,
    stats: [Number],
    totalStats: Number,
    megaStats: [Number],
    megaTotalStats: Number,
    learnset: [{
        move: Number,
        learnHow: String
    }],
    gameLocations: [{
        game: String,
        location: [String]
    }]
});

let Pokemon = mongoose.model('Pokemon', pokemonSchema);

let bulbasaur = new Pokemon;

bulbasaur.nDexNumber = 001;
bulbasaur.name = 'Bulbasaur';
bulbasaur.type1 = 'Grass';
bulbasaur.type2 = 'Poison';
bulbasaur.ability = ['Overgrow'];
bulbasaur.hiddenAbility = 'Chlorophyll';
bulbasaur.evolutionLine = [{
        nDexNumber: 001,
        isThisPokemon: true,
        evolveHow: null
    },
    {
        nDexNumber: 002,
        isThisPokemon: false,
        evolveHow: 'Level 16'
    },
    {
        nDexNumber: 003,
        isThisPokemon: false,
        evolveHow: 'Level 32'
    }];
bulbasaur.genderRatio = [87.5, 12.5];
bulbasaur.mega = false;
bulbasaur.stats = [45, 49, 49, 65, 65, 45];
bulbasaur.totalStats = 318;
bulbasaur.megaStats = null;
bulbasaur.megaTotalStats = null;
bulbasaur.learnset = null;
bulbasaur.gameLocations = null;

bulbasaur.save((err) => {
    if (err) console.log(err);
    else console.log(bulbasaur);
});