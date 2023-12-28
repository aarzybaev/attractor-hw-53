import './App.css';
import React, {useState} from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

interface Todo {
  id: string;
  task: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([
    {id: '1703769875638', task: 'Buy milk'},
    {id: '1703769875668', task: 'Walk with dog'},
    {id: '1703769875698', task: 'Do homework'}
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const inputTaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const taskText: string = event.target.value;
    setCurrentTask(taskText);
  };

  const addTaskHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (currentTask) {
      const id: string = new Date().getTime().toString();
      const todoCopy = [...todo];
      const newTodo = {id, task: currentTask};
      todoCopy.push(newTodo);
      setTodo(todoCopy);
    }
  };

  const removeHandler = (id: string) => {
    const index = todo.findIndex((item) => item.id === id);
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo(todoCopy);
  };

  return (
    <div className="App">
      <AddTaskForm
        addTask={addTaskHandler}
        onTaskChange={(event) => {
          inputTaskHandler(event);
        }}
      />
      {
        todo.map((item) => {
          return (
            <Task
              key={item.id}
              task={item.task}
              removeTask={() => {
                removeHandler(item.id);
              }}
            />
          );
        })
      }
    </div>
  );
}

export default App;
