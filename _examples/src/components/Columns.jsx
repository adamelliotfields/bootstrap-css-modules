import React from 'react';

import { row } from '../../../layout/row.css';
import { justifyContentCenter } from '../../../utilities/justify.css';
import { colSm12, colMd4 } from '../../../layout/columns.css';
import { mt5 } from '../../../utilities/marginTop.css';
import { my3, myMd0 } from '../../../utilities/marginY.css';
import { imgFluid } from '../../../content/images.css';
import { rounded } from '../../../utilities/borders.css';

const Columns = () => (
  <div className={`${row} ${justifyContentCenter} ${mt5}`}>
    <div className={`${colSm12} ${colMd4}`}>
      <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1464061884326-64f6ebd57f83?fit=crop&w=800&h=600' />
    </div>
    <div className={`${colSm12} ${colMd4} ${my3} ${myMd0}`}>
      <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1489593951513-b3a219ba7872?fit=crop&w=800&h=600' />
    </div>
    <div className={`${colSm12} ${colMd4}`}>
      <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1481278403982-f2d9f387cdcc?fit=crop&w=800&h=600' />
    </div>
  </div>
);

export default Columns;
