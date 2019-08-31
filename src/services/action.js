export const move = goal => ({
  type: "move",
  data: goal
});

export const createGroupChat = newChat => ({
  type: "createGroupChat",
  data: newChat
});