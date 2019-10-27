import { combineReducers } from 'redux'
import { totalReducer } from './testreducer'
import { bronzewbReducer } from './bronzewb'
import { bronzevideoReducer } from './bronzevideo'

export const rootReducer = combineReducers({
    total: totalReducer,
    bronzewb: bronzewbReducer,
    bronzevideo: bronzevideoReducer
});
