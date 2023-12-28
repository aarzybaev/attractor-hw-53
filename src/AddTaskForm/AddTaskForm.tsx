import React from 'react';

interface Props {
  onTaskChange?: React.ChangeEventHandler<HTMLInputElement>;
  addTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({
                                        onTaskChange,
                                        addTask
                                      }) => {
  return (
    <div className="form-task ">
      <form>
        <input onChange={onTaskChange} type="text"/>
        <button className="btn" type="button" onClick={addTask}>Add</button>
      </form>
    </div>
  );
};


export default AddTaskForm;