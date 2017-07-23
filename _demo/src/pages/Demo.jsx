import React from 'react';

import { container } from '../../../css/container.css';
import { row } from '../../../css/row.css';
import { col12, colSm10 } from '../../../css/columns.css';
import { justifyContentCenter } from '../../../css/justify.css';
import { textCenter } from '../../../css/text.css';
import { display4, lead } from '../../../css/type.css';
import { mt5 } from '../../../css/marginTop.css';

import Columns from '../components/Columns.jsx';
import ButtonGroup from '../components/ButtonGroup.jsx';
import Modal from '../components/Modal.jsx';

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
