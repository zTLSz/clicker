export const COUNT = 'COUNT'


export function count() {

    return dispatch => {

      dispatch({
        type: COUNT,
        payload: 1,
      })

    }

}
