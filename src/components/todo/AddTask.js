import React from "react";
import { connect } from "react-redux";
import actions from "../../app/tasks/duck/actions";

const AddTask = props => {
  const taskInput = React.createRef();
  const taskCheckbox = React.createRef();

  const addTask = e => {
    const taskElements = {
      input: taskInput.current.value,
      checkbox: taskCheckbox.current.checked
    };

    if (taskElements.input === "") {
      return e.preventDefault();
    }
    e.preventDefault();
    props.add(taskElements);
    document.querySelector(".addTask__input").value = "";
    document.querySelector(".checkbox").checked = false;
  };

  return (
    <form className="addTask__form" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Wpisz nazwę zadania"
        className="addTask__input input"
        ref={taskInput}
      />

      <label className="addTask__checkbox-container ">
        Ważne
        <input
          type="checkbox"
          className="addTask__checkbox checkbox"
          ref={taskCheckbox}
        />
      </label>
      <button type="submit" className="addTask__submit btn btn-dark">
        Dodaj zadanie
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  add: task => dispatch(actions.add(task))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTask);
