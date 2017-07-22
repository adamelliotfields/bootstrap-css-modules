import React from 'react';

import { container } from '../../../layout/container.css';

import { footer } from './Footer.css';

const Footer = () => (
  <footer className={footer}>
    <div className={container}>
      <a href='https://github.com/adamelliotfields' target='_blank'>@adamelliotfields</a>
    </div>
  </footer>
);

export default Footer;
