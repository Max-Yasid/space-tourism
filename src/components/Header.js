import React from 'react';
import './header.css'
import CustomRouteLink from './CustomRouteLink';
import logo from './../assets/images/shared/logo.svg';
import hamburgerIcon from "./../assets/images/shared/icon-hamburger.svg";
import closeIcon from "./../assets/images/shared/icon-close.svg";
import { useState } from 'react';

const Header = React.memo(function() {
  let [isAsideMenuShowing, toggleAsideMenu] = useState(false);
  return (
    <header className="header w-100">
      <div className="header__logoContainer">
        <img className="logo" src={logo} width="48" alt="logo" />
      </div>
      <div className="header__middleLineContainer">
        <div className="header__middleLine"></div>
      </div>
      <nav className="header__navbar">
        <CustomRouteLink to="/">
          <span className="header__linkNumber">00</span> HOME
        </CustomRouteLink>
        <CustomRouteLink to="/destination">
          <span className="header__linkNumber">01</span> DESTINATION
        </CustomRouteLink>
        <CustomRouteLink to="/crew">
          <span className="header__linkNumber">02</span> CREW
        </CustomRouteLink>
        <CustomRouteLink to="/technology">
          <span className="header__linkNumber">03</span> TECHNOLOGY
        </CustomRouteLink>
        <img
          className="hamburgerIcon"
          onClick={() => toggleAsideMenu(!isAsideMenuShowing)}
          src={hamburgerIcon} 
          alt="hamburgerIcon" 
        />
      </nav>
      {window.innerWidth <= 375 && 
        <aside className={`${isAsideMenuShowing && "showAsideMenu"} asideMenu`}>
          <div className="asideMenu__closeIconContainer">
            <img 
              className="asideMenu__closeIcon"
              onClick={() => toggleAsideMenu(!isAsideMenuShowing)} 
              src={closeIcon} 
              alt="close" 
            />
          </div>
          <CustomRouteLink to="/">
            <span className="header__linkNumber">00</span> HOME
          </CustomRouteLink>
          <CustomRouteLink to="/destination">
            <span className="header__linkNumber">01</span> DESTINATION
          </CustomRouteLink>
          <CustomRouteLink to="/crew">
            <span className="header__linkNumber">02</span> CREW
          </CustomRouteLink>
          <CustomRouteLink to="/technology">
            <span className="header__linkNumber">03</span> TECHNOLOGY
          </CustomRouteLink>
        </aside>
      }
    </header>
  );
});

export default Header;