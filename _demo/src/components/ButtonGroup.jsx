import React, { Component } from 'react';

import { col12, colSm10 } from '../../../css/container.css';
import { display4, lead } from '../../../css/type.css';
import { textCenter } from '../../../css/text.css';
import { mt3 } from '../../../css/marginTop.css';
import {
  btn,
  btnOutlineSecondary,
  btnGroup,
  show,
  dropdownToggle,
  dropdownMenu,
  dropdownItem
} from '../../../css/components.css';

class ButtonGroup extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState(({active}) => ({
      active: !active
    }));
  };

  render () {
    return (
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={display4}>Button Group</h1>
        <p className={lead}>Use component state to toggle the <code>.show</code> class for the dropdown.</p>
        <div className={`${btnGroup} ${mt3}`}>
          <button className={`${btn} ${btnOutlineSecondary}`}>Left</button>
          <button className={`${btn} ${btnOutlineSecondary}`}>Middle</button>
          <div className={`${btnGroup} ${this.state.active ? show : null}`}>
            <button
              className={`${btn} ${btnOutlineSecondary} ${dropdownToggle}`}
              onClick={this.handleClick}
            >Dropdown
            </button>
            <div className={dropdownMenu}>
              <a className={dropdownItem} href='#'>Dropdown link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
