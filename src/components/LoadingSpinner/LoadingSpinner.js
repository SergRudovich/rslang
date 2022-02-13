import './LoadingSpinner.css';
import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <>
      <div className='spinner-icon'>
        <Spinner
          animation="border"
          variant="danger">
        </Spinner>
      </div>
      <div className='spinner-container'></div>
    </>
  );
}

export default LoadingSpinner;
