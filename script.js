const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokedexApi');

var moveSchema = new mongoose.schema({
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

var pokemonSchema = new mongoose.schema({
    nDexNumber: Number,
    name: String,
    type1: String,
    type2: String,
    ability: [String],
    hiddenAbility: String,
    evolutionLine: [{
        nDexNumber: Number, 
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

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

var bulbasaur = new Pokemon;

bulbasaur.nDexNumber = 001;
bulbasaur.name = 'Bulbasaur';
bulbasaur.type1 = 'Grass';
bulbasaur.type2 = 'Poison';
bulbasaur.ability = ['Overgrow'];
bulbasaur.hiddenAbility = 'Chlorophyll';
bulbasaur.evolutionLine =  [{001, 'Bulbasaur'}, {002, 'Ivysaur'}, {003, 'Venusaur'}];
bulbasaur.genderRatio = [87.5, 12.5];
bulbasaur.mega = false;
bulbasaur.stats = [45, 49, 49, 65, 65, 45];
bulbasaur.totalStats = 318;
bulbasaur.megaStats = null;
bulbasaur.megaTotalStats = null;
bulbasaur.learnset = null;
bulbasaur.gameLocations = null;