import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { mt1, mt4, mtLg0 } from '../../../css/marginTop.css';
import { mrAuto } from '../../../css/marginRight.css';
import { collapse, show } from '../../../css/transitions.css';
import {
  navbarToggler,
  navbarTogglerRight,
  navbarTogglerIcon,
  navbarNav,
  navbarCollapse,
  navbarBrand,
  navbarLink,
  active,
  btn,
  btnOutlineSecondary
} from '../../../css/components.css';

import { navbarCustom } from './Navbar.css';

class Navbar extends Component {
  state = {
    show: false
  };

  // Pass handleClick to all links to close the navbar
  handleClick = () => {
    this.setState(({show}) => ({
      show: !show
    }));
  };

  render () {
    return (
      <nav className={navbarCustom}>
        <button
          className={`${navbarToggler} ${navbarTogglerRight}`}
          onClick={this.handleClick}
        ><span className={navbarTogglerIcon} />
        </button>
        <span className={navbarBrand}>Navbar</span>
        <div className={`${collapse} ${this.state.show ? show : null} ${navbarCollapse}`}>
          <div className={`${navbarNav} ${mt1} ${mrAuto}`}>
            {/* Note that we must give the CSS Module class active to React Router
             Otherwise, React Router will apply the string 'active'
             Which won't match the hashed class in our bundle */}
            <NavLink
              exact to='/'
              className={navbarLink}
              activeClassName={active}
              onClick={this.handleClick}
            >Home
            </NavLink>
            <NavLink
              to='/demo'
              className={navbarLink}
              activeClassName={active}
              onClick={this.handleClick}
            >Demo
            </NavLink>
          </div>
          <Link
            to='/login'
            className={`${btn} ${btnOutlineSecondary} ${mt4} ${mtLg0}`}
            onClick={this.handleClick}
          >Login
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
