import React from 'react';

import { container } from '../../../layout/container.css';
import { row } from '../../../layout/row.css';
import { col12, colSm10, colLg8 } from '../../../layout/columns.css';
import { justifyContentCenter } from '../../../utilities/justify.css';
import { textCenter } from '../../../utilities/text.css';
import { lead, display4 } from '../../../content/type.css';
import { mt5 } from '../../../utilities/marginTop.css';

import LoginForm from './LoginForm.jsx';

const Login = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${colLg8}`}>
        <h1 className={`${display4} ${textCenter}`}>Login</h1>
        <p className={lead}>Use component state combined with HTML5 form validation to dynamically display feedback to the user.</p>
        <div className='container mt-5'>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);

export default Login;
