import React, { Component } from 'react';

import { mt3, mt5 } from '../../../css/marginTop.css';
import { w100 } from '../../../css/sizing.css';
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
} from '../../../css/components.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    validEmail: false,
    validPassword: false
  };

  handleChange = (event) => {
    const name = event.target.id;
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
      <form
        action={process.env.NODE_ENV === 'production' ? 'https://adamelliotfields.github.io/bootstrap-css-modules/' : '/'}
        method='GET'
        className={formGroup}
      >
        <div className={validEmail ? hasSuccess : hasDanger}>
          <label htmlFor='email' className={mt3}>Email</label>
          <input
            ref={(emailInput) => { this.emailInput = emailInput; }}
            id='email'
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
            className={`${formControl} ${validPassword ? formControlSuccess : formControlDanger}`}
            type='password'
            value={password}
            minLength={8}
            onChange={(event) => this.handleChange(event)}
            required
          />
          <small>{this.passwordInput ? this.passwordInput.validationMessage : null}</small>
        </div>
        <button
          type='submit'
          className={`${btn} ${validEmail && validPassword ? btnPrimary : btnOutlineSecondary} ${w100} ${mt5}`}
          disabled={!(validEmail && validPassword)}
        >Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
