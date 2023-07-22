import React from 'react';
import "./Loading.css"
const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingComponent;