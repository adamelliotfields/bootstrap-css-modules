import React from 'react';

import { container } from '../../../css/container.css';
import { row } from '../../../css/row.css';
import { col12, colSm10 } from '../../../css/columns.css';
import { justifyContentCenter } from '../../../css/justify.css';
import { textCenter } from '../../../css/text.css';
import { display4, lead } from '../../../css/type.css';
import { mt5 } from '../../../css/marginTop.css';

import Vimeo from '../components/Vimeo.jsx';

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
