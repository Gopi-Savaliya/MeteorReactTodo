import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';

export const TaskForm = ({ user }) => {
  const [task, setTask] = useState("");

  const onSubmithandler = (e) => {
    e.preventDefault();
    if (!task) return;
    Meteor.call('tasks.insert', task);
    setTask("");
  };

  return (
    <form className="task-form" onSubmit={onSubmithandler}>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="New Task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
