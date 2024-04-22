import React from 'react';
import Login from './login';


function App() {
  const handleAdminLogin = () => {
    // Handle admin login logic here
    alert('Admin Login clicked');
  };

  const handleStaffLogin = () => {
    // Handle staff login logic here
    alert('Staff Login clicked');
  };

  return (
    <div className="App">
      <Login 
        onAdminLogin={handleAdminLogin}
        onStaffLogin={handleStaffLogin}
      />
    </div>
  );
}

export default App;
