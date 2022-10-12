import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/level.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={addTask}
    >
      <div className="form-outline flex-fill">
        <input
          className="form-control form-control-lg"
          ref={nameRef}
          id="inputName"
          type="text"
          required
          autoFocus
          placeholder="Task Name"
        />
        <input
          className="form-control form-control-lg"
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          required
          placeholder="Task Description"
        />
        {/* <label className="sr-only" htmlFor="selectLevel">
          Priority
        </label> */}
        <select  className="form-control form-control-lg" ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
          <option className="normal-style" value={LEVELS.NORMAL}>Normal</option>
          <option className="urgent-style" value={LEVELS.URGENT}>Urgent</option>
          <option className="blocking-style" value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      <button className="btn btn-success btn-lg ms-2" type="submit" >{length > 0 ? 'Add New Task': 'Create your First Task'}</button>
      </div>
    </form>
  );
};
TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};
export default TaskForm;
