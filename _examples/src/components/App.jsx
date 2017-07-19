import React from 'react';

import { container, row, col4 } from '../../../layout/grid.css';
import { bgPrimary, bgFaded } from '../../../utilities/background.css';

const App = () => (
  <div className={`${container} ${bgPrimary}`}>
    <div className={row}>
      <div className={col4}>
        <p>.col-4</p>
      </div>
      <div className={`${col4} ${bgFaded}`}>
        <p>.col-4</p>
      </div>
      <div className={col4}>
        <p>.col-4</p>
      </div>
    </div>
  </div>
);

export default App;
