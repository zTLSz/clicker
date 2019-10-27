import { COUNT } from '../actions/testAction'
import { AUTOCLICK_BRONZE } from '../actions/autoclickbronze'
import { BUY_BRONZE_WORKBENCH, BUY_BRONZE_WORKBENCH_ERROR } from '../actions/buyBronzeWorkbench'
import { BUY_BRONZE_VIDEOCARD, BUY_BRONZE_VIDEOCARD_ERROR } from '../actions/buyBronzeVideocard'

const gameStore = localStorage.getItem('gameStore');

let initialState = {
    counterBronze: 0,
    counterSilver: 0,
    counterGold: 0,
    // bronzeIncreaseTotal: 0, 
    silverIncreaseTotal: 0,
    goldIncreaseTotal: 0,
    isErrorNoMoney: false,
}


if (gameStore !== null) {
    const gameStoreParsed = JSON.parse(localStorage.getItem('gameStore'));
    initialState = gameStoreParsed.total;
}
    

export function totalReducer(state = initialState, action) {
    switch(action.type) {
        case COUNT:
            return { ...state, 
                    counterBronze: state.counterBronze + action.payload  
                    }

        case BUY_BRONZE_WORKBENCH:
            return  { ...state, 
                        counterBronze: state.counterBronze - action.payload.cost,
                        // bronzeIncreaseTotal: state.bronzeIncreaseTotal + action.payload.power,
                        isErrorNoMoney: false
                    }
        case BUY_BRONZE_WORKBENCH_ERROR:
            return  { ...state, 
                        isErrorNoMoney: true
                    }
        
        case BUY_BRONZE_VIDEOCARD:
            return  { ...state, 
                        counterBronze: state.counterBronze - action.payload.cost,
                        // bronzeIncreaseTotal: state.bronzeIncreaseTotal + action.payload.power,
                        isErrorNoMoney: false
                    }

        case BUY_BRONZE_VIDEOCARD_ERROR:
            return  { ...state, isErrorNoMoney: true
                    }
        
        case AUTOCLICK_BRONZE:
            return { ...state, 
                        counterBronze: state.counterBronze + action.payload  
                    }        

        default:
            return state;
    }

}