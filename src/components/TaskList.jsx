import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <svg className="empty-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <path d="M9 16l2 2 4-4"></path>
          </svg>
          <p>No tasks available</p>
          <span className="empty-subtitle">Add a task to get started!</span>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
