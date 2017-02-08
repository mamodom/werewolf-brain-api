var express = require('express');
var brain = require('werewolf-brain');

var game = brain.getBalancedGame(5);
var script = brain.getScriptFromDeck(game.deck);


var app = express();

app.get('/cards', function(req, res) {
    res.send(brain.getAllCards());
});

app.get('/cards/:card_key', function(req, res) {
    res.send(brain
        .getAllCards()
        .filter(function(value, index, array) {
            return value === req.param.card_key;
        })[0]);
});

app.get('/decks', function(req, res) {
    res.send(brain.getAllDecks());
});

app.get('/decks/:deck_key', function(req, res) {
    res.send(brain.getAllDecks()[req.param.deck_key]);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});