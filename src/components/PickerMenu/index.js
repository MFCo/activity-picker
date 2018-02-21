import React from 'react';
import PropTypes from 'prop-types';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import * as style from './style.js';

const PickerMenu = ({ items, value, action }) =>
  <DropDownMenu style={style.pickerText}
    onChange={(event, index, value) => action({ value })}
    menuItemStyle={style.pickerText}
    underlineStyle={style.pickerUnderline}
    iconStyle={style.pickerIcon}
    labelStyle={style.pickerLabel}
    value={value}>
    {
      items.map((element, index) =>
        <MenuItem value={index} primaryText={element} key={element + index} />)
    }
  </DropDownMenu>
  ;

PickerMenu.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  action: PropTypes.func
}

export default PickerMenu;