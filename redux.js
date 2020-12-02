const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  name: "Nova",
  age: 23,
  value: 10,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 2,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};
// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 15 });
console.log(store.getState());
