export const BUY_BRONZE_VIDEOCARD = 'BUY_BRONZE_VIDEOCARD'
export const BUY_BRONZE_VIDEOCARD_ERROR = 'BUY_BRONZE_VIDEOCARD_ERROR'

export function buyBronzeVideoCard(cost, power) {

    return (dispatch, getState) => {
      const currState = getState();
      if (currState.total.counterBronze >= currState.bronzevideo.price) {
        dispatch({
          type: BUY_BRONZE_VIDEOCARD,
          payload: {
            id: 1,
            cost: cost,
            power: power,
          },
        })
      } else {

        dispatch({
          type: BUY_BRONZE_VIDEOCARD_ERROR,
          payload: true,
        })

      }

    }

}
