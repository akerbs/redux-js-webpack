// Observer pattern
// https://refactoring.guru/ru/design-patterns/observer

export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" }); // let state = {};
  const subscribers = []; // array of callbacks

  return {
    dispatch(action) {
      state = rootReducer(state, action); // newStateObj
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
