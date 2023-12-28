import React from 'react';

interface Props {
  task: string;
  removeTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({
                                 task,
                                 removeTask
                               }) => {
  return (
    <div className="task">
      {task}
      <button className="btn" onClick={removeTask} type="button">Remove</button>
    </div>
  );
};


export default Task;