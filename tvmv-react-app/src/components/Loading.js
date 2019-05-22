import React from 'react';
import { PongSpinner } from 'react-spinners-kit';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <PongSpinner size={100} color='#2757FF' />
    </div>
  );
};

export default Loading;
