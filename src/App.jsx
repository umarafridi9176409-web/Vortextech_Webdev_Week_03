import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './style.css'; // Changed to use our custom plain CSS

const App = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Generate a unique ID based on timestamp
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Calculate counters
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <div className="task-manager-card">
        <header className="header">
          <h1>React Task Manager</h1>
          <p>Manage your daily goals efficiently</p>
        </header>

        <div className="counters">
          <div className="counter-box">
            <span className="counter-value">{totalTasks}</span>
            <span className="counter-label">Total</span>
          </div>
          <div className="counter-box completed-box">
            <span className="counter-value">{completedTasks}</span>
            <span className="counter-label">Completed</span>
          </div>
          <div className="counter-box remaining-box">
            <span className="counter-value">{remainingTasks}</span>
            <span className="counter-label">Remaining</span>
          </div>
        </div>

        <TaskInput addTask={addTask} />
        
        <TaskList 
          tasks={tasks} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      </div>
    </div>
  );
};

export default App;
