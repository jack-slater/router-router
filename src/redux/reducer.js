const COMPLETE_SESSION = "COMPLETE_SESSION";

export const completeSession = (number) => {
  return {
      type: COMPLETE_SESSION,
      payload: number
  }
};

export const initialState = {
  trainingComplete: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case COMPLETE_SESSION: {
            return Object.assign({}, state, {
                trainingComplete: state.trainingComplete.concat(action.payload)
            })
        }

        default:
            return state;
    }

};