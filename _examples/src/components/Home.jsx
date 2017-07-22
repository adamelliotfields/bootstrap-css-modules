import React from 'react';

import { container } from '../../../layout/container.css';
import { row } from '../../../layout/row.css';
import { col12, colSm10 } from '../../../layout/columns.css';
import { justifyContentCenter } from '../../../utilities/justify.css';
import { textCenter } from '../../../utilities/text.css';
import { display4, lead } from '../../../content/type.css';
import { mt5 } from '../../../utilities/marginTop.css';

import Vimeo from './Vimeo.jsx';

const Home = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={display4}>Welcome</h1>
        <p className={lead}>Not only is this video ad-free, but it's responsive.</p>
      </div>
    </div>
    <div className={`${row} ${justifyContentCenter} ${mt5}`}>
      <Vimeo />
    </div>
  </div>
);

export default Home;
