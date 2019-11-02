import types from "./types";

const InitialTask = {
  tasks: [
    { name: "Zadanie pierwsze", id: 1, important: false },
    { name: "Zadanie drugie ważne", id: 2, important: true }
  ]
};

const tasksReducer = (state = InitialTask, action) => {
  switch (action.type) {
    case types.RESET_TASK:
      return {
        ...state,
        tasks: []
      };
    case types.ADD_TASK:
      const index = state.tasks.length + 1;
      const isImportant = action.important;
      const task = { name: action.task, id: index, important: isImportant };

      return {
        ...state,
        tasks: [...state.tasks, task]
      };
    case types.DELETE_TASK:
      const tasks = state.tasks.filter(task => task.id !== action.index);
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].id = i + 1;
      }
      return {
        ...state,
        tasks
      };
    default:
      return state;
  }
};

export default tasksReducer;
