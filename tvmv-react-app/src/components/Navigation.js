//--------------DEPENDANCIES-------------------//
import React from 'react';
import { NavLink } from 'react-router-dom';
//--------------STYLES-------------------//
import './Navigation.css';
//--------------STATELESS FUNCTION-------------------//
const Navigation = () => {
  return (
    <div className='navigation-container'>
      <NavLink to='/search' activeClassName='is-active'>
        <span className='span-icon search-nav' alt='search' />
      </NavLink>
      <NavLink exact to='/' activeClassName='is-active'>
        <span className='span-icon home' alt='home' />
      </NavLink>
      <NavLink to='/TV' activeClassName='is-active'>
        <span className='span-icon tv' alt='television' />
      </NavLink>
      <NavLink to='/movies' activeClassName='is-active'>
        <span className='span-icon movies' alt='movies' />
      </NavLink>
      <NavLink to='/favorites' activeClassName='is-active'>
        <span className='span-icon favorites' alt='favorites' />
      </NavLink>
    </div>
  );
};

export default Navigation;
