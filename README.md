# werewolf-brain-api
[wistcc/werewolf-brain](https://github.com/wistcc/werewolf-brain) as a service

```
Get     /cards
            returns all cards
            response:
                [
                    { "role": "villager", "value": 1, "amount": 20 },
                    { "role": "werewolf", "value": -6, "amount": 12 },
                    ...
                ]

Get     /cards/{card_key}
            returns card details
            response:
                { "role": "villager", "value": 1, "amount": 20 }

Get     /decks
            returns all decks
            response:
                {
                    "basic": ["werewolf", "villager"],
                    "novice": ["werewolf", "villager", "seer", "mayor"],
                    ...
                }

Get     /decks/{deck_key}
            returns all cards keys in a given deck
            response:
                ["werewolf", "villager", "seer", "mayor"]

Get    /game
            returns a game.
            arguments:
                players (required)
                cardsToInclude (required)
                scriptScope (default deck)
                    * game
                    * deck
                    * all
                language (default null)
                chaos (default false)

Get     /languagePacks/
            returns a list of available language packs

Get     /languangePacks/{language_pack_key}
            return localization file for `language_pack_key`
```
