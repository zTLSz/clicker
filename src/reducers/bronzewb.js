import { BUY_BRONZE_WORKBENCH } from '../actions/buyBronzeWorkbench'

const gameStore = localStorage.getItem('gameStore');

let initialState = {
        count: 0,
        price: 5,
        initpower: 1,
        power: 0
    }

if (gameStore !== null) {
    const gameStoreParsed = JSON.parse(localStorage.getItem('gameStore'));
    initialState = gameStoreParsed.bronzewb;
}


export function bronzewbReducer(state = initialState, action) {
    switch(action.type) {

        case BUY_BRONZE_WORKBENCH:
            return  { ...state, count: state.count + 1, price: Math.round(state.price*1.4), 
                power: state.power + state.initpower }

        default:
            return state;
    }

}