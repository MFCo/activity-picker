import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import actions from '../actions';

import ActivitiesTable from '../components/ActivitiesTable';
import FooterGreets from '../components/FooterGreets';

import request from 'superagent';

import * as style from './style-table';

const { updateTable } = actions;

function fetchTable(props) {
  request
    .get(`https://api.backendless.com/${process.env.REACT_APP_ID}/${process.env.REACT_APP_KEY}/data/activities?`)
    .end((err, res) => {
      if (err) { console.log("error");return; }
      props.updateTable({ table: res.body });
    });
}

class TablePage extends React.Component {

  static propTypes = {
    updateTable: PropTypes.func,
  }
  componentDidMount() {
    fetchTable(this.props);
  }

  render() {
    return (
      <div id="table" style={style.tablePageLayout}>
        <h1 style={style.tablePageHeader}> This are the activities that you could find interesting</h1>
        <ActivitiesTable />
        <FooterGreets />
      </div>);
  }
}

export default connect(undefined, { updateTable })(TablePage);