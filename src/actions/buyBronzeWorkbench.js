export const BUY_BRONZE_WORKBENCH = 'BUY_BRONZE_WORKBENCH'
export const BUY_BRONZE_WORKBENCH_ERROR = 'BUY_BRONZE_WORKBENCH_ERROR'

export function buyBronzeWorkbench(cost, power) {

    return (dispatch, getState) => {
      const currState = getState();
      if (currState.total.counterBronze >= currState.bronzewb.price) {
        dispatch({
          type: BUY_BRONZE_WORKBENCH,
          payload: {
            id: 1,
            cost: cost,
            power: power,
          },
        })
      } else {

        dispatch({
          type: BUY_BRONZE_WORKBENCH_ERROR,
          payload: true,
        })

      }

    }

}
