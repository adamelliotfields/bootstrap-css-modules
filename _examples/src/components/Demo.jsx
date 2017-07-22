import React from 'react';

import { container } from '../../../layout/container.css';
import { row } from '../../../layout/row.css';
import { col12, colSm10 } from '../../../layout/columns.css';
import { justifyContentCenter } from '../../../utilities/justify.css';
import { textCenter } from '../../../utilities/text.css';
import { display4, lead } from '../../../content/type.css';
import { mt5 } from '../../../utilities/marginTop.css';

import Columns from './Columns.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import Modal from './Modal.jsx';

const Demo = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={display4}>Columns</h1>
        <p className={lead}>Beautiful photography from Unsplash.</p>
      </div>
    </div>
    <Columns />
    <div className={`${row} ${justifyContentCenter} ${mt5}`}>
      <ButtonGroup />
    </div>
    <div className={`${row} ${justifyContentCenter} ${mt5}`}>
      <Modal />
    </div>
  </div>
);

export default Demo;
