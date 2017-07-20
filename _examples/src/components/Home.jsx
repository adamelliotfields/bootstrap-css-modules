import React from 'react';

import { container, row, col12, colSm10 } from '../../../layout/grid.css';
import { justifyContentCenter } from '../../../utilities/flex.css';
import { textCenter } from '../../../utilities/text.css';
import { display4, lead } from '../../../content/type.css';
import { mt5 } from '../../../utilities/spacing.css';

const Home = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={`${display4}`}>Welcome</h1>
        <p className={`${lead}`}>This is the home page.</p>
      </div>
    </div>
  </div>
);

export default Home;
