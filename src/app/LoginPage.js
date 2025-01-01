import React from 'react';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h1 style={styles.title}>shoulder<br />arthroplasty</h1>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email or Username</label>
            <input style={styles.input} type="text" id="email" placeholder="Email address or username" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input style={styles.input} type="password" id="password" placeholder="Password" />
          </div>
          <a style={styles.forgotPassword} href="#">Forgot Password?</a>
          <button style={styles.button}>Log in</button>
          <hr style={styles.hr} />
          <p style={styles.signupText}>SIGN UP HERE IF YOU DON&apos;T HAVE ACCOUNT.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Make it full viewport height
    backgroundColor: '#92BDF6', // Light blue background
  },
  leftPanel: {
    flex: 1, // Takes up 1/2 of the space
    display: 'flex',
    justifyContent: 'center', // Vertically center content
    alignItems: 'center',     // Horizontally center content
  },
  rightPanel: {
    flex: 1, // Takes up 1/2 of the space
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFD700', // Gold title
    fontSize: '3em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#ffff', // Lighter blue form background
    padding: '20px',
    border: '0.1px solid #ffff',
    borderRadius: '8px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    width: '300px', // Set a fixed width for the form
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#000000',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #000',
    backgroundColor: '#ffff',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  forgotPassword: {
    display: 'block',
    textAlign: 'right',
    marginBottom: '10px',
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '0.8em',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  hr: {
    border: '0.5px solid #ccc',
    marginBottom: '10px',
  },
  signupText: {
    textAlign: 'center',
    fontSize: '0.5em',
    color: 'black',
  },
};

export default LoginPage;