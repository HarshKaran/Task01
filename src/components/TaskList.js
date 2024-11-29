
import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, updateTaskStatus, deleteTask } = useTasks();

  // Sort tasks based on priority: High > Medium > Low
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <ul className="space-y-4 p-4 bg-gray-50">
      {sortedTasks.map((task) => (
        <li
          key={task.id}
          className={`shadow rounded-lg p-4 flex flex-col space-y-2 ${
            task.status === 'completed'
              ? 'bg-green-100 hover:bg-green-200'
              : 'bg-white hover:bg-gray-100'
          } transition-colors`}
        >
          <div className="flex justify-between items-center">
            <Link
              to={`/task/${task.id}`}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {task.title}
            </Link>
            <span className="text-sm text-gray-500">{task.dueDate}</span>
          </div>

          <p className="text-gray-700">{task.description}</p>

          <div className="flex justify-between items-center space-x-4">
            <span
              className={`px-2 py-1 text-sm font-medium rounded ${
                task.priority === 'High'
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {task.priority} Priority
            </span>
            <Link to={`/edit/${task.id}`} className="text-blue-500 hover:underline">
              Edit
            </Link>
            <button
              style={{marginLeft:'auto'}}
              onClick={() =>
                updateTaskStatus(
                  task.id,
                  task.status === 'pending' ? 'completed' : 'pending'
                )
              }
              className={`px-4 py-2 text-sm rounded ${
                task.status === 'completed'
                  ? 'bg-gray-500 text-white hover:bg-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;




// src/components/TaskList.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTasks } from '../context/TaskContext';

// const TaskList = () => {
//   const { tasks, updateTaskStatus, deleteTask } = useTasks();

//   // Sort tasks based on priority: High > Medium > Low
//   const sortedTasks = tasks.sort((a, b) => {
//     const priorityOrder = { High: 1, Medium: 2, Low: 3 };
//     return priorityOrder[a.priority] - priorityOrder[b.priority];
//   });

//   return (
//     <ul className="space-y-4 p-4 bg-gray-50">
//       {sortedTasks.map((task) => (
//         <li
//           key={task.id}
//           className={`shadow rounded-lg p-4 flex flex-col space-y-2 ${
//             task.status === 'completed' ? 'bg-green-100 hover:bg-green-200' : 'bg-white hover:bg-gray-100'
//           } transition-colors`}
//         >
//           <div className="flex justify-between items-center">
//             <Link
//               to={`/task/${task.id}`}
//               className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               {task.title}
//             </Link>
//             <span className="text-sm text-gray-500">{task.dueDate}</span>
//           </div>
//           <p className="text-gray-700">{task.description}</p>
//           <div className="flex justify-between items-center space-x-4">
//             <span className={`px-2 py-1 text-sm font-medium rounded ${
//               task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
//             }`}>
//               {task.priority} Priority
//             </span>
//             <button
//               style={{ marginLeft: 'auto' }}
//               onClick={() =>
//                 updateTaskStatus(
//                   task.id,
//                   task.status === 'pending' ? 'completed' : 'pending'
//                 )
//               }
//               className={`px-4 py-2 text-sm rounded ${
//                 task.status === 'completed' ? 'bg-gray-500 text-white hover:bg-gray-600' : 'bg-blue-500 text-white hover:bg-blue-600'
//               }`}
//             >
//               {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
//             </button>
//             <button
//               onClick={() => deleteTask(task.id)}
//               className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

