import React from 'react';
import ActivityPicker from '../ActivityPicker';
import { HashLink as Link } from 'react-router-hash-link';

import * as style from './style.js';

const Header = () =>
  <header style={style.headerLayout}>
    <h1 style={style.headerTitle}>
      <a style={style.headerAnchor} href="/">
        What do you want to do this weekend?
      </a>
    </h1>
    <ActivityPicker />
    <span style={style.headerLink}>
      <Link smooth to="/#table">Go to activities</Link>
    </span>
  </header>;

export default Header;