export const AUTOCLICK_BRONZE = 'AUTOCLICK_BRONZE'

export function autoclickBronze() {

    return (dispatch, getState) => {
      const currState = getState();

      const amount = currState.bronzewb.power + currState.bronzevideo.power;
      
      dispatch({
        type: AUTOCLICK_BRONZE,
        payload: amount
      })


    }

}
