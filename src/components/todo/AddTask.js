import React from "react";

const AddTask = () => {
  return (
    <form className="addTask__form">
      <input
        type="text"
        placeholder="Wpisz nazwę zadania"
        className="addTask__input input"
      />
      <label htmlFor="checkbox">Ważne</label>
      <input
        type="checkbox"
        className="addTask__checkbox"
        value=""
        id="checkbox"
      />
      <button type="submit" className="addTask__submit">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default AddTask;
