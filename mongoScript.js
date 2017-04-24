const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017');

const moveSchema = new mongoose.Schema({
    id: Number,
    name: String,
    power: Number,
    pp: Number,
    accuracy: Number,
    priority: Number,
    type: String,
    category: String,
    description: String
});

const pokemonSchema = new mongoose.Schema({
    nDexNumber: Number,
    name: String,
    type1: String,
    type2: String,
    ability: [String],
    hiddenAbility: String,
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

let models = {
    Move: mongoose.model('Move', moveSchema),
    Pokemon: mongoose.model('Pokemon', pokemonSchema)
}

module.exports = models;
