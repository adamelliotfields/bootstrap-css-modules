import React, { Component } from 'react';

import { col12, colSm10 } from '../../../layout/columns.css';
import { display4, lead } from '../../../content/type.css';
import { textCenter } from '../../../utilities/text.css';
import { btn, btnOutlineSecondary, btnPrimary } from '../../../components/core.css';
import { mt3 } from '../../../utilities/marginTop.css';
import { close } from '../../../components/close.css';
import { modal, modalDialog, modalContent, modalHeader, modalTitle, modalBody, modalFooter } from '../../../components/modal.css';

class Modal extends Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState(({show}) => ({
      show: !show
    }));
  };

  render () {
    return (
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={display4}>Modal</h1>
        <p className={lead}>Toggle the modal by setting <code>display: 'block'</code>.</p>
        <button className={`${btn} ${btnOutlineSecondary} ${mt3}`} onClick={this.handleClick}>Launch demo modal</button>

        <div className={modal} style={{display: this.state.show ? 'block' : 'none'}}>
          <div className={modalDialog}>
            <div className={modalContent}>
              <div className={modalHeader}>
                <h5 className={modalTitle}>Modal</h5>
                <button className={close} onClick={this.handleClick}>
                  <span>&times;</span>
                </button>
              </div>
              <div className={modalBody}>
                Both the &times; and Close button will set <code>display: 'none'.</code>
              </div>
              <div className={modalFooter}>
                <button className={`${btn} ${btnPrimary}`} onClick={this.handleClick}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
