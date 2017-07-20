import React from 'react';

import { container, row, col12, colSm8 } from '../../../layout/grid.css';
import { justifyContentCenter } from '../../../utilities/flex.css';
import { textCenter } from '../../../utilities/text.css';
import { display4 } from '../../../content/type.css';
import { mt3, mt5 } from '../../../utilities/spacing.css';
import { formGroup, formControl } from '../../../components/forms.css';
import { btn, btnOutlinePrimary } from '../../../components/buttons.css';
import { w100 } from '../../../utilities/sizing.css';

const Login = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm8}`}>
        <h1 className={`${display4} ${textCenter}`}>Login</h1>
        <div className='container mt-5'>
          <form id='form' className={formGroup} action='/' method='GET'>
            <label htmlFor='email' className={mt3}>Email</label>
            <input id='email' className={formControl} type='email' required/>
            <label htmlFor='password' className={mt3}>Password</label>
            <input id='password' className={formControl} type='password' required/>
            <button type='submit' form='form' className={`${btn} ${btnOutlinePrimary} ${w100} ${mt5}`}>Submit</button>
            <small><em>This doesn't submit anywhere...</em></small>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
