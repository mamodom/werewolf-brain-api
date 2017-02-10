var express = require('express');
var brain = require('werewolf-brain');

var app = express();

app.get('/cards', function(req, res) {
    res.send(brain.getAllCards());
});

app.get('/cards/:card_key', function(req, res) {
    res.send(brain
        .getAllCards()
        .filter(function(value, index, array) {
            return value === req.params.card_key;
        })[0]);
});

app.get('/decks', function(req, res) {
    res.send(brain.getAllDecks());
}); 

app.get('/decks/:deck_key', function(req, res) {
    res.send(brain.getAllDecks()[req.params.deck_key]);
});

app.get('/languages', function(req, res) {
    res.send(brain.getAvailableLanguages());
});

app.get('/languages/:language_key', function(req, res) {
    res.send(brain.getTranslation(req.params.language_key));
});

app.get('/game', function(req, res) {
    
    const players = req.query.players;
    const cardsToInclude = JSON.parse(req.query.cardsToInclude || []);
    const scriptScope = req.query.scriptScope || 'deck';
    const chaos = req.query.chaos || false;

    var game = null;
    if(chaos) {
        game = brain.getChaosGame(players, cardsToInclude);
    } else {
        game = brain.getBalancedGame(players, cardsToInclude);
    }

     game.script = brain.getScriptFromDeck(game.game);
    
    res.send(game);
});
const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
