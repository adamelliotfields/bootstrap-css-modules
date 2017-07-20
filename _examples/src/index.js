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

const Photos = asyncComponent(async function () {
  const module = await import('./components/Photos.jsx');
  return module.default;
});

const Login = asyncComponent(async function () {
  const module = await import('./components/Login.jsx');
  return module.default;
});

render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/photos' component={Photos} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
