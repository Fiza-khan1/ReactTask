import React, { useState,useEffect } from 'react';
function TodoApp() {
  const [tasks, setTasks] = useState([ { id: 1692448100000, text: 'Buy groceries' },
    { id: 1692448150000, text: 'Walk the dog' }]);
  const [taskText, setTaskText] = useState('');
  

  

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([ {...tasks, id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
useEffect(() => {
console.log(tasks)
}, [tasks])

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => {
              const newText = prompt('Edit task', task.text);
              if (newText) {
                editTask(task.id, newText);
              }
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
