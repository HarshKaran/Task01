import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, { id: Date.now(), ...task }]);

  const updateTaskStatus = (id, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === parseInt(id) ? { ...task, status } : task
      )
    );
  };


const updateTask = (id, updatedTask) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === parseInt(id) ? { ...task, ...updatedTask } : task
    )
  );
};

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, deleteTask ,updateTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
