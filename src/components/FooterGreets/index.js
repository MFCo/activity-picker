import React from 'react';

import { Face } from '../../icons';

import * as style from './style';

const FooterGreets = () =>
  <div style={style.footerLayout}>
    <span style={style.footerFace}>
      <Face />
    </span>
    <h1 style={style.footerText}>
      Hope you could enjoy some activities this weekend!
    </h1>
  </div>;

export default FooterGreets;