import types from "./types";

const add = item => ({
  type: types.ADD_TASK,
  task: item.input,
  important: item.checkbox
});

const del = item => ({
  type: types.DELETE_TASK,
  index: item
});

const reset = item => ({
  type: types.RESET_TASK,
  item
});

export default {
  add,
  del,
  reset
};
