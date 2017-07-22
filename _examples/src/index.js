import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../../content/reboot.css';
import './stylesheets/main.css';

import asyncComponent from './components/asyncComponent.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

const Demo = asyncComponent(async function () {
  const module = await import(/* webpackChunkName: 'demo' */ './components/Demo.jsx');
  return module.default;
});

const Login = asyncComponent(async function () {
  const module = await import(/* webpackChunkName: 'login' */ './components/Login.jsx');
  return module.default;
});

// Set basename to GitHub pages path
render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/bootstrap-css-modules' : '/'}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/demo' component={Demo} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
