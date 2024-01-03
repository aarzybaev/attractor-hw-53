import React from 'react';

interface Props {
  onTaskChange?: React.ChangeEventHandler<HTMLInputElement>;
  addTask: React.FormEventHandler;
}

const AddTaskForm: React.FC<Props> = ({
  onTaskChange,
  addTask
}) => {
  return (
    <div className="form-task ">
      <form onSubmit={addTask}>
        <input onChange={onTaskChange} type="text"/>
        <button className="btn" type="submit">Add</button>
      </form>
    </div>
  );
};


export default AddTaskForm;