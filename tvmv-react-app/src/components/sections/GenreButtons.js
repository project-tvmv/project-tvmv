//--------------DEPENDANCIES-------------------//
import React from 'react';
import { NavLink } from 'react-router-dom';
//--------------STYLES-------------------//
import './GenreButton.css';
//--------------STATELESS COMPONENT-------------------//
const GenreButtons = () => {
  return (
    <div className='genre-buttons-container'>
      <button className='genre-buttons'>Action</button>
      <button className='genre-buttons'>Animation</button>
      <button className='genre-buttons'>Horror</button>
      <button className='genre-buttons'>Comedy</button>
      <button className='genre-buttons'>Sci-Fi</button>
      <button className='genre-buttons'>Romance</button>
    </div>
  );
};

export default GenreButtons;
