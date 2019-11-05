import React, { useContext } from 'react';
import HeaderMod from './Header.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

const Header = () => {
   const { handleLogout } = useContext(Context);
   
   return (
      <header className={ HeaderMod.app_header }>
         <img src={logo} className={ HeaderMod.logo } alt="logo" />
         <div className={ HeaderMod.menu }>
            <ul>
               <li>
                  <Link to="/map">Карта</Link>
               </li>
               <li>
                  <Link to="/profile">Профиль</Link>
               </li>
               <li onClick={ () => handleLogout() }>
                  <Link to="/login">Выйти</Link>
               </li>
            </ul>
         </div>
      </header>
   )
}

Header.propTypes = {
   handleChangeCurrentTab: PropTypes.func
}

export default Header;