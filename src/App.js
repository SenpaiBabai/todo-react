import React, {useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import {nanoid} from 'nanoid';

let DATA = [
  {id: '234e23', name: 'test', checked: false},
  {id: '234asdf23', name: 'test2', checked: false}
];

function App() {
  const [allTasks, setAllTasks] = useState(DATA)

  function addTask(newName) {
    const newTask = {id: nanoid(), name: newName, checked: false};
    return setAllTasks([...allTasks, newTask])
  }

  function deleteTask(idDelete) {
    let newTask = allTasks.filter((filter) => idDelete !== filter.id);
    return setAllTasks(newTask)
  } 

  const tasks = allTasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      checked={task.checked}
      deleteTask={deleteTask}
    />
  ))

  const form = (
    <Form 
      addTask={addTask}
    />
  )

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {form}
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading" >
        {tasks}
      </ul>
    </div>
  );
}

export default App; 
