import React from 'react';

import moment from 'moment';
import { filterFunc } from '../../utils/functions';
import AddNewActivity from '../AddActivityModal';

import * as style from './style';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { Ok, Not } from '../../icons';

import { connect } from 'react-redux';

const TableExampleSimple = ({ table, time, category, group }) => (
  <div style={style.tableLayout}>
    <Table
      style={style.tableStyle}
      selectable={false}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Reason</TableHeaderColumn>
          <TableHeaderColumn>Required weather</TableHeaderColumn>
          <TableHeaderColumn>Allow friends</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        showRowHover={true}
      >
        {table.filter((element) => filterFunc(element, time, category, group)).map((row, index) => (
          <TableRow key={`${table.name} + ${index}`}>
            <TableRowColumn >{moment(new Date(row.nextPossibleDate)).format('dddd DD/MM/YYYY, h:mm a')}</TableRowColumn>
            <TableRowColumn >{row.name}</TableRowColumn>
            <TableRowColumn>{row.recommendation_reason}</TableRowColumn>
            <TableRowColumn>{row.requiredWeather}</TableRowColumn>
            <TableRowColumn>{row.groupActivity ? <Ok /> : <Not />}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <AddNewActivity />
  </div>
);

const mapStateToProps = ({ table: { table }, criteria: { time, category, group } }) => ({ table, time, category, group });

export default connect(mapStateToProps)(TableExampleSimple);