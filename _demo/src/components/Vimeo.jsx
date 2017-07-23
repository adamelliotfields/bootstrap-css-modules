import React from 'react';

import { col12, colSm10 } from '../../../css/columns.css';
import { embedResponsive, embedResponsive16By9, embedResponsiveItem } from '../../../css/responsiveEmbed.css';

const Vimeo = () => (
  <div className={`${col12} ${colSm10}`}>
    <div className={`${embedResponsive} ${embedResponsive16By9}`}>
      <iframe
        className={embedResponsiveItem}
        src='https://player.vimeo.com/video/226201181?byline=0&portrait=0'
        allowFullScreen
      />
    </div>
    <small>
      <a href='https://vimeo.com/226201181'>Ghosts of the Arctic</a> from <a href='https://vimeo.com/untitledfilmworks'>Untitled Film Works</a> on <a href='https://vimeo.com'>Vimeo</a>.
    </small>
  </div>
);

export default Vimeo;
