import React from 'react';
import LoginPage from './LoginPage'; // Relative path to your component

const Home: React.FC = () => {
  return (
    <div>
      {/* Other content for your homepage (optional) */}
      <LoginPage />
    </div>
  );
};

export default Home;