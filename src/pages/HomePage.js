



import React, { useState } from 'react';
import TaskForm from '../components/TaskForm.js';
import TaskList from '../components/TaskList.js';
import TaskEdit from '../components/TaskEdit.js';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Save a new or updated task
  const handleSave = (task) => {
    if (editingTask) {
      // Update the existing task
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
    } else {
      // Add a new task
      setTasks([...tasks, { ...task, id: Date.now(), status: 'pending' }]);
    }
    setEditingTask(null); // Close the editing form
  };

  // Delete a task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Task Management
        </h1>
        {editingTask ? (
          <TaskEdit task={editingTask} onSave={handleSave} />
        ) : (
          <>
            <div className="mb-8">
              <TaskForm onSave={handleSave} />
            </div>
            <TaskList
              tasks={tasks}
              onEdit={(task) => setEditingTask(task)}
              onDelete={handleDelete}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
