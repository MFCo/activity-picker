import React from 'react';
import PropTypes from 'prop-types';
import actions from '../../actions';

import * as style from './style.js';

import { connect } from 'react-redux';

import { timesOfDay, groups, categories } from '../../utils/criteria';

import PickerMenu from '../PickerMenu';

const { updateTime, updateGroup, updateCategory } = actions;

const ActivityPicker = ({ time, category, group, updateTime, updateGroup, updateCategory }) =>
  <div style={style.pickerLayout}>
    <h1 style={style.pickerText}>
      I want to:
      </h1>
    <div style={style.pickerDisplay}>
      <PickerMenu items={categories.map((element) => element.label)} value={category} action={updateCategory} />
      <span style={style.pickerText}>at </span>
      <PickerMenu items={timesOfDay.map((element) => element.label)} value={time} action={updateTime} />
      <PickerMenu items={groups.map((element) => element.label)} value={group} action={updateGroup} />
    </div>
  </div>;

ActivityPicker.propTypes = {
  time: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
  group: PropTypes.number.isRequired
}

const mapStateToProps = ({ criteria: { time, category, group } }) => ({ time, category, group });


export default connect(mapStateToProps, { updateTime, updateGroup, updateCategory })(ActivityPicker);