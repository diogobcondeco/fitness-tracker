export interface State {
  isLoading: boolean;
}

const initalState = {
  isLoading: false
};

export function appReducer(state = initalState, action) {
  switch (action.type) {
    case "START_LOADING":
      return {
        isLoading: true
      };
    case "STOP_LOADING":
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
