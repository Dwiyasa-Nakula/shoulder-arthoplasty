import React from 'react';
import type { NextPage } from 'next';
import type { CSSProperties } from 'react';

const SizeChecking: NextPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>SIZE CHECKING</h1>
        <div style={styles.importFile}>Import File</div>
      </div>
      <div style={styles.content}>
        <div style={styles.imageGrid}>
          <div style={styles.imagePlaceholder} />
          <div style={styles.imagePlaceholder} />
          <div style={styles.imagePlaceholder} />
          <div style={styles.imagePlaceholder} />
        </div>
        <div style={styles.resultsArea}>
            <div style={styles.resultPlaceholder}/>
            <div style={styles.resultPlaceholder}/>
        </div>
        <button style={styles.calculateButton}>CALCULATE</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    backgroundColor: '#AED6F1',
    padding: '10px 20px',
    borderRadius: '10px',
  },
  title: {
    color: '#000',
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: 0,
  },
  importFile: {
    backgroundColor: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
  },
  content: {
    flex: 1,
    backgroundColor: '#AED6F1',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    gap: '10px', // Adds spacing between the grid and the button
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',

  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gridTemplateRows: '1fr 1fr',     // Two equal rows
    gap: '10px',
    flex: 2
  },
  imagePlaceholder: {
    backgroundColor: '#000', // Black placeholder
    borderRadius: '5px',
    border: '1px solid #fff'
  },
    resultsArea: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px',
    boxSizing: 'border-box'
  },
    resultPlaceholder: {
        backgroundColor: '#AED6F1',
        height: '45%',
        borderRadius: '5px'
    },
  calculateButton: {
    padding: '10px 20px',
    backgroundColor: '#34495E', // Darker gray/blue
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end', // Align to the right
    marginTop: '10px'
  },
};

export default SizeChecking;