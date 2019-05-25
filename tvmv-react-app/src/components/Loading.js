/* Loading Ping Pong Animation */

//--------------DEPENDANCIES-------------------//
import React from 'react';
import { PongSpinner } from 'react-spinners-kit';
//--------------STYLES-------------------//
import './Loading.css';
//--------------STATELESS COMPONENT-------------------//
const Loading = () => {
  return (
    <div className='loading'>
      <PongSpinner size={100} color='#2757FF' />
    </div>
  );
};

export default Loading;
