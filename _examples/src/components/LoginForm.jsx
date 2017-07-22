import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { mt3, mt5 } from '../../../utilities/marginTop.css';
import { w100 } from '../../../utilities/sizing.css';
import {
  formGroup,
  formControl,
  formControlSuccess,
  formControlDanger,
  hasSuccess,
  hasDanger,
  btn,
  btnOutlineSecondary,
  btnPrimary
} from '../../../components/core.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    validEmail: false,
    validPassword: false
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
      validEmail: this.emailInput.validity.valid,
      validPassword: this.passwordInput.validity.valid
    });
  };

  componentDidMount () {
    this.emailInput.focus();
    // Force re-render to access the form validation messages
    this.forceUpdate();
  }

  render () {
    const { email, password, validEmail, validPassword } = this.state;

    return (
      <form className={formGroup}>
        <div className={validEmail ? hasSuccess : hasDanger}>
          <label htmlFor='email' className={mt3}>Email</label>
          <input
            ref={(emailInput) => { this.emailInput = emailInput; }}
            id='email'
            name='email'
            className={`${formControl} ${validEmail ? formControlSuccess : formControlDanger}`}
            type='email'
            value={email}
            onChange={(event) => this.handleChange(event)}
            required
          />
          <small>{this.emailInput ? this.emailInput.validationMessage : null}</small>
        </div>
        <div className={validPassword ? hasSuccess : hasDanger}>
          <label htmlFor='password' className={mt3}>Password</label>
          <input
            ref={(passwordInput) => { this.passwordInput = passwordInput; }}
            id='password'
            name='password'
            className={`${formControl} ${validPassword ? formControlSuccess : formControlDanger}`}
            type='password'
            value={password}
            minLength={8}
            onChange={(event) => this.handleChange(event)}
            required
          />
          <small>{this.passwordInput ? this.passwordInput.validationMessage : null}</small>
        </div>
        <Link
          exact to='/'
          className={`${btn} ${validEmail && validPassword ? btnPrimary : btnOutlineSecondary} ${w100} ${mt5}`}
          disabled={!(validEmail && validPassword)}
        >Submit
        </Link>
      </form>
    );
  }
}
export default LoginForm;
