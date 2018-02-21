import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as style from './style';

export default class DialogNewActivity extends React.Component {
  state = {
    open: false,
    recomendation_reason: '',
    created: new Date().toISOString(),
    nextPossibleDate: new Date().toISOString(),
    description: '',
    groupActivity: false,
    ownerId: null,
    requiredWeather: '',
    imageUrl: '',
    name: '',
    category: '',
    updated: new Date().toISOString(),
    timeOfDay: ''
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <React.Fragment>
        <FloatingActionButton backgroundColor="rgb(142,85,106)" style={style.buttonStyle} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add a new activity to let your friends know about it!"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div style={style.menuStyle}>
            <span> We could </span>
            <TextField
              style={style.textStyle}
              hintText="Here goes your activity name"
            />
            <span>
              because
            </span>
            <TextField
              style={style.textStyle}
              hintText="Why are you recommending this?"
            />
            <span> It will be a </span>
            <SelectField
              floatingLabelText="the category"
              value={this.state.value}
            >
              <MenuItem value={1} primaryText="funny" />
              <MenuItem value={2} primaryText="productive" />
            </SelectField>
            <span>
              activity. </span>
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}