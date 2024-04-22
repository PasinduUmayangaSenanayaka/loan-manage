import React from 'react';

const Login = ({ onAdminLogin, onStaffLogin }) => {
  const containerStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Login</h2>
      <button
        style={buttonStyle}
        onClick={onAdminLogin}
        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Admin Login
      </button>
      <button
        style={buttonStyle}
        onClick={onStaffLogin}
        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Staff Login
      </button>
    </div>
  );
}

export default Login;
