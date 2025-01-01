import React from 'react';
import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

const Dashboard: NextPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.dashboardTitle}>DASHBOARD</h1>
        <div style={styles.userIcon}>👤</div> {/* Placeholder user icon */}
      </div>
      <div style={styles.mainContent}>
        {/* Main content area (you can add charts, graphs, etc. here) */}
      </div>
      <div style={styles.bottomBar}>
        <div style={{...styles.bottomBarItem, backgroundColor: '#E6B0AA'}}>History</div> {/* Light Pink */}
        <div style={{...styles.bottomBarItem, backgroundColor: '#F4D03F'}}>Size Checking</div> {/* Light Yellow */}
        <div style={{...styles.bottomBarItem, backgroundColor: '#A9DFBF'}}>Size Guiding</div> {/* Light Green */}
        <div style={{...styles.bottomBarItem, backgroundColor: '#A9CCE3'}}>Settings</div> {/* Light Blue */}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Stack header, content, and bottom bar vertically
    height: '100vh',
    width: '100vw',
    backgroundColor: '#92BDF6',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#EBF5FB',
    padding: '20px',
    borderRadius: '10px'

  },
  dashboardTitle: {
    color: '#000',
    fontSize: '2em',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '2px 2px 4px #fff'
  },
  userIcon: {
    fontSize: '2em',
    cursor: 'pointer',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '5px'
  },
  mainContent: {
    flex: 1, // Take up remaining space
    backgroundColor: '#AED6F1', // Light blue content area
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '10px'
  },
  bottomBarItem: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: '5px',
    borderRadius: '10px',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)'
  },
};

export default Dashboard;