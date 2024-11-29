import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import TaskDetails from './components/TaskDetails';
import { TaskProvider } from './context/TaskContext';
import { AuthProvider } from './context/AuthContext';
import EditTask from './components/EditTask';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/edit/:id" element={<EditTask />} /> {/* Add route for EditTask */}
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
