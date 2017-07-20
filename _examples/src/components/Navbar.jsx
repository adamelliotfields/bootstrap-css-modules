import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { navbarNav, navbarCollapse, navbarBrand, navLink, active } from '../../../components/navbar.css';
import { btn, btnOutlineSecondary } from '../../../components/buttons.css';
import { my3, mt1, ml3, mr3, pb5, mrAuto } from '../../../utilities/spacing.css';

import { navbarCustom } from './Navbar.css';

// Note that we must give the CSS Module class active to React Router
// Otherwise, React Router will apply the string 'active'
// Which won't match the hashed class in our bundle
const Navbar = () => (
  <nav className={navbarCustom}>
    <span className={navbarBrand}>Navbar</span>
    <div className={`${navbarNav} ${navbarCollapse} ${mt1} ${mrAuto}`}>
      <NavLink exact to='/' className={navLink} activeClassName={active}>Home</NavLink>
      <NavLink to='/photos' className={navLink} activeClassName={active}>Photos</NavLink>
    </div>
    <Link to='/login' className={`${btn} ${btnOutlineSecondary}`}>Login</Link>
  </nav>
);

export default Navbar;
