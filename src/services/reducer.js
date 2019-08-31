import { combineReducers } from "redux";

const initialState = {
  location: "LOBBY",
  chatroomList: {
    solo: ["123"],
    group: [
      {
        chatIcon: 6,
        chatTitle: "new chat",
        chatDesc: "desc of new chat",
        chatId: 123
      }
    ]
  }
};

export const location = function(state = initialState.location, action) {
  switch (action.type) {
    case "move":
      return action.data;
    default:
      return state;
  }
};

export const chatroomList = function(state = initialState.chatroomList, action) {
  switch (action.type) {
    case "createGroupChat":
      return {
        solo: [...state.solo],
        group: [...state.group, action.data]
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  location,
  chatroomList
});
