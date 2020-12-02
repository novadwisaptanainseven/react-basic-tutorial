import ActionType from "./GlobalActionType";

const globalState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.PLUS_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  } else if (action.type === ActionType.MINUS_ORDER) {
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      };
    }
  }
  return state;
};

export default rootReducer;
