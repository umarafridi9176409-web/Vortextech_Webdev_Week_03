import { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate empty input
    if (taskText.trim() === '') {
      alert('Please enter a task');
      return;
    }
    
    // Call the parent function to add task
    addTask(taskText);
    
    // Clear input after adding
    setTaskText('');
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
