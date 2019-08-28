import { combineReducers } from "redux";

const initialState = {
  location: "LOBBY"
}

export const location = function (state = initialState.location, action) {
  switch (action.type) {
    case "move":
      return action.data;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  location
});