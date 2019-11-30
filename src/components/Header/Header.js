import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderMod from './Header.module.css';
import logo from './logo.svg';
import { onLogout } from '../../redux/actions';

export class Header extends Component {
   static propTypes = {
      onLogout: PropTypes.func.isRequired
   };

   onHandleLogout = () => {
      const { onLogout } = this.props;
      
      onLogout();
   };

   render() {

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
                  <li onClick={ this.onHandleLogout }>
                     <Link to="/">Выйти</Link>
                  </li>
               </ul>
            </div>
         </header>
      )
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onLogout: () => {
         dispatch(onLogout());
      }
   };
};

export const WrappedHeader = connect(null, mapDispatchToProps)(Header);