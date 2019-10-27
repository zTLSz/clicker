import { BUY_BRONZE_VIDEOCARD } from '../actions/buyBronzeVideocard'


const gameStore = localStorage.getItem('gameStore');

let initialState = {
        count: 0,
        price: 500,
        initpower: 5,
        power: 0
    }


if (gameStore !== null) {
    const gameStoreParsed = JSON.parse(localStorage.getItem('gameStore'));
    initialState = gameStoreParsed.bronzevideo;
}
    


export function bronzevideoReducer(state = initialState, action) {
    switch(action.type) {

        case BUY_BRONZE_VIDEOCARD:
            return  { ...state, count: state.count + 1, price: Math.round(state.price*1.4), 
                power: state.power + state.initpower }

        default:
            return state;
    }

}