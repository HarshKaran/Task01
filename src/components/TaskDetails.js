
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, updateTaskStatus, deleteTask } = useTasks();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return (
      <div className="text-center p-8">
        <p className="text-lg font-semibold text-gray-600">
          Task not found.
        </p>
      </div>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/'); // Redirect to the home page after deletion
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Task Details
      </h2>
      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          <strong>Title:</strong> {task.title}
        </p>
        <p className="text-lg">
          <strong>Description:</strong> {task.description}
        </p>
        <p className="text-lg">
          <strong>Due Date:</strong> {task.dueDate}
        </p>
        <p className="text-lg">
          <strong>Priority:</strong>{' '}
          <span
            className={`px-2 py-1 rounded text-sm font-medium ${
              task.priority === 'High'
                ? 'bg-red-100 text-red-800'
                : task.priority === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {task.priority}
          </span>
        </p>
        <p className="text-lg">
          <strong>Status:</strong>{' '}
          <span
            className={`font-semibold ${
              task.status === 'completed' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {task.status}
          </span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 mt-6">
        <button
          onClick={() =>
            updateTaskStatus(
              task.id,
              task.status === 'pending' ? 'completed' : 'pending'
            )
          }
          className={`w-full py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            task.status === 'completed'
              ? 'bg-gray-500 text-white hover:bg-gray-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button
          onClick={handleDelete}
          className="w-full py-3 text-lg font-semibold bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
