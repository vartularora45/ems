import React, { useState } from 'react';
import Login from './assets/auth/Login';
import EmployeeDashboard from './assets/auth/dashboard/EmployeeDashboard';
import AdminDashboard from './assets/auth/dashboard/AdminDashboard';
import AuthProvider from './assets/context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
    } else if (email === 'employee@example.com' && password === '123') {
      setUser('employee');
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <AuthProvider>
       {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </AuthProvider>
  );
};

export default App;
