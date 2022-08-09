import React from 'react';


import TodoList from '../todo-list';
import './app.css';


const App = () => {

  const tasks = [

    { id: 1, label: 'Buy lemonade', important: false, done: false },
    { id: 1, label: 'Make toasts', important: false, done: false },
    { id: 1, label: 'Repair car', important: false, done: false },
    { id: 1, label: 'Play games', important: false, done: false },
    { id: 1, label: 'Pet a cat', important: false, done: false },
  ]


  return (
    <div className="todo-app">

      // Todo List
      <TodoList todos={tasks} />

    </div>
  );
};

export default App;
