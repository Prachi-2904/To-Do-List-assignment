import React from 'react';

export const TodoList = ({ tasks = [], onEditTask, onDeleteTask }) => {
  // Ensure `tasks` is always an array
  if (!Array.isArray(tasks)) {
    return <div>Error: Invalid tasks data</div>;
  }

  // Render the component
  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={task.id || index} style={{ marginBottom: '10px' }}>
              <div>
                <strong>{task.name || 'No Name'}</strong> - {task.description || 'No Description'} (Assigned to: {task.assignedTo || 'Unassigned'})
              </div>
              <div>
                <button onClick={() => onEditTask(index)} disabled={typeof onEditTask !== 'function'}>
                  Edit
                </button>
                <button
                  onClick={() => onDeleteTask(index)}
                  style={{ marginLeft: '10px' }}
                  disabled={typeof onDeleteTask !== 'function'}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};
