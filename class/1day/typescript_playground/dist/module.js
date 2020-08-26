"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerAverages = void 0;
// long-from ex of why we need interfaces
function randomPlayer(first_name, last_name, jerseyNumber) {
    return `Player data: ${first_name}, ${last_name}, ${jerseyNumber}`;
}
;
function player_data(data) {
    return `Player DATA: ${data.first_name}, ${data.last_name}, ${data.jerseyNumber}`;
}
;
player_data({ first_name: 'Joel', last_name: 'Carter', jerseyNumber: 36 });
class playerAverages {
    constructor(player_data, average) {
        this.player_data = player_data;
        this.average = average;
    }
    getPlayerAverages(first_name, last_name, jerseyNumber) {
        this.average = 30 / 82;
        this.player_data = {
            first_name: first_name,
            last_name: last_name,
            jerseyNumber: jerseyNumber
        };
        return `${this.player_data.first_name} is averaging ${this.average}`;
    }
}
exports.playerAverages = playerAverages;
;
