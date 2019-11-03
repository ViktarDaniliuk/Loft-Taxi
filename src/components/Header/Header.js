import React, { useContext } from 'react';
import HeaderMod from './Header.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { Context } from '../../context';

const Header = ({ handleChangeCurrentTab }) => {
   const { handleLogout } = useContext(Context);

   return (
      <header className={ HeaderMod.app_header }>
         <img src={logo} className={ HeaderMod.logo } alt="logo" />
         <div className={ HeaderMod.menu }>
            <ul>
               <li onClick={ () => handleChangeCurrentTab("mapblock") }>Карта</li>
               <li onClick={ () => handleChangeCurrentTab("profile") }>Профиль</li>
               <li onClick={ () => handleLogout() }>Выйти</li>
            </ul>
         </div>
      </header>
   )
}

Header.propTypes = {
   handleChangeCurrentTab: PropTypes.func
}

export default Header;