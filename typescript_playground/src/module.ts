interface BasketballPLayer{
    first_name: string;
    last_name: string;
    jerseyNumber: number;
}

// long-from ex of why we need interfaces
function randomPlayer(first_name:string, last_name:string,jerseyNumber:36){
    return `Player data: ${first_name}, ${last_name}, ${jerseyNumber}`;
};

function player_data(data:BasketballPLayer){
    return`Player DATA: ${data.first_name}, ${data.last_name}, ${data.jerseyNumber}`;
};
player_data({first_name:'Joel', last_name:'Carter', jerseyNumber:36});


export class playerAverages{
    constructor(private player_data: BasketballPLayer, private average: number){

    }

    getPlayerAverages(first_name:string, last_name:string,jerseyNumber:number){
        this.average = 30/82
        this.player_data= {
            first_name: first_name,
            last_name: last_name,
            jerseyNumber: jerseyNumber
        }
        return`${this.player_data.first_name} is averaging ${this.average}`;
    }
};