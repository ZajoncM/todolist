import React from "react";
import { connect } from "react-redux";
import actions from "../../app/tasks/duck/actions";

const TaskList = ({ tasks, del }) => {
  const delTask = e => del(e);

  return (
    <div className="container taskList__list">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Zadanie</th>
            <th scope="col">Ważne</th>
            <th scope="col">Usuń</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task =>
            task.important ? (
              <tr className="tasklist__task table-danger" key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>Ważne!!!</td>
                <td>
                  <button
                    className="btn btn-link"
                    onClick={() => delTask(task.id)}
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            ) : (
              <tr className="tasklist__task" key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td></td>
                <td>
                  <button
                    className="btn btn-link"
                    onClick={() => delTask(task.id)}
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  del: task => dispatch(actions.del(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
