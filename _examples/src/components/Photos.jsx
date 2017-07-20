import React from 'react';

import { container, row, col12, colSm12, colSm10, colMd4 } from '../../../layout/grid.css';
import { justifyContentCenter } from '../../../utilities/flex.css';
import { textCenter } from '../../../utilities/text.css';
import { display4, lead } from '../../../content/type.css';
import { mt5, mySm3, myMd0 } from '../../../utilities/spacing.css';
import { imgFluid } from '../../../content/images.css';
import { rounded } from '../../../utilities/borders.css';

const Photos = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={`${display4}`}>Photos</h1>
        <p className={`${lead}`}>Beautiful photography from Unsplash.</p>
      </div>
    </div>
    <div className={`${row} ${justifyContentCenter} ${mt5}`}>
      <div className={`${colSm12} ${colMd4}`}>
        <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1464061884326-64f6ebd57f83?fit=crop&w=800&h=600' />
      </div>
      <div className={`${colSm12} ${colMd4} ${mySm3} ${myMd0}`}>
        <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1489593951513-b3a219ba7872?fit=crop&w=800&h=600' />
      </div>
      <div className={`${colSm12} ${colMd4}`}>
        <img className={`${imgFluid} ${rounded}`} src='https://images.unsplash.com/photo-1481278403982-f2d9f387cdcc?fit=crop&w=800&h=600' />
      </div>
    </div>
  </div>
);

export default Photos;
