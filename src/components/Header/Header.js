import React from 'react';
import HeaderMod from './Header.module.css';
import logo from './logo.svg';

const Header = (props) => {
   return (
      <header className={ HeaderMod.app_header }>
         <img src={logo} className={ HeaderMod.logo } alt="logo" />
         <div className={ HeaderMod.menu }>
            <ul>
               <li onClick={ () => props.handleChangeCurrentTab("mapblock") }>Карта</li>
               <li onClick={ () => props.handleChangeCurrentTab("profile") }>Профиль</li>
               <li onClick={ () => props.handleChangeCurrentTab("login") }>Выйти</li>
            </ul>
         </div>
      </header>
   )
}

export default Header;