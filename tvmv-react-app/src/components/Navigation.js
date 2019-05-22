//--------------DEPENDANCIES-------------------//
import React from 'react';
import { NavLink } from 'react-router-dom';
//--------------STYLES-------------------//
import './Navigation.css';
//--------------ASSETS-------------------//
import search from '../assets/icons/search.svg';
import home from '../assets/icons/home.svg';
import tv from '../assets/icons/tv.svg';
import movie from '../assets/icons/film.svg';
import favorites from '../assets/icons/star.svg';
//--------------STATELESS FUNCTION-------------------//
const Navigation = () => {
  return (
    <div className='navigation-container'>
      <NavLink to='/search'>
        <img src={search} className='nav-icons' alt='search' />
      </NavLink>
      <NavLink to='/'>
        <img src={home} className='nav-icons' alt='home' />
      </NavLink>
      <NavLink to='/television'>
        <img src={tv} className='nav-icons' alt='television' />
      </NavLink>
      <NavLink to='/movies'>
        <img src={movie} className='nav-icons' alt='movies' />
      </NavLink>
      <NavLink to='/favorites'>
        <img src={favorites} className='nav-icons' alt='favorites' />
      </NavLink>
    </div>
  );
};

export default Navigation;
