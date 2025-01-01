import React from 'react';
import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

const SignupPage: NextPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        {/* You can add content to the left panel if needed */}
        <p style={styles.signupText}>Sign up</p>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Create Account</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="fullName">Full Name</label>
            <input style={styles.input} type="text" id="fullName" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input style={styles.input} type="email" id="email" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input style={styles.input} type="password" id="password" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="occupation">Occupation</label>
            <input style={styles.input} type="text" id="occupation" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="username">Username</label>
            <div style={styles.usernameContainer}>
              <input style={styles.usernameInput} type="text" id="username" />
              <span style={styles.infoIcon}>ⓘ</span> {/* Info icon */}
            </div>
            <p style={styles.usernameAvailability}>press ⓘ for checking username availibility</p>
          </div>
          <button style={styles.createAccountButton}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#ffff',
    fontFamily: 'sans-serif',
  },
  leftPanel: {
    flex: 0.5,
    backgroundColor: '#ADD8E6',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
  },
  rightPanel: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: '#f8f8f8'
  },
    signupText:{
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: 'black'
    },
  formContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px',
  },
  title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: 'black',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: 'black'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    color: 'black',
  },
  usernameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  usernameInput: {
    flex: 1,
    padding: '12px',
    border: '1px solid #ccc',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    boxSizing: 'border-box',
    outline: 'none',
    marginRight: '5px',
    backgroundColor: 'white',
    color: 'black',
  },
  infoIcon: {
    cursor: 'pointer',
    color: '#999',
    fontSize: '1.2em',
  },
  usernameAvailability: {
    fontSize: '0.7em',
    color: '#666',
    marginTop: '5px',
  },
  createAccountButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#82E0AA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1em',
  },
};

export default SignupPage;