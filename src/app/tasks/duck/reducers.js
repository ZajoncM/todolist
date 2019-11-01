import types from "./types";

const INITIAL_STATE = {
  tasks: ["jeden", "dwa", "trzy"]
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    default:
      return state;
  }
};

export default tasksReducer;
