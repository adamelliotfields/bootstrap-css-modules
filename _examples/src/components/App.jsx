import React from 'react';

import grid from '../../../layout/grid';
import background from '../../../utilities/background'

const { container, row, col4 } = grid;
const { bgPrimary, bgFaded } = background;

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
