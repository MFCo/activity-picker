import { combineReducers } from 'redux';

import criteria from './criteria';
import table from './table';

export default combineReducers({ criteria, table });