import React from 'react';

import { container } from '../../../css/container.css';
import { row } from '../../../css/row.css';
import { col12, colSm10, colLg8 } from '../../../css/columns.css';
import { justifyContentCenter } from '../../../css/justify.css';
import { textCenter } from '../../../css/text.css';
import { lead, display4 } from '../../../css/type.css';
import { mt5 } from '../../../css/marginTop.css';

import LoginForm from '../components/LoginForm.jsx';

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
