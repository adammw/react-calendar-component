import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Calendar from '../components/Calendar';
import '../stylesheets/global.css';
import * as CalendarActions from '../actions/CalendarActions';

@connect(state => ({
  dates: state.dates,
  events: state.events
}))
export default class CalendarApp extends Component {
  render() {
    const { dates, events, dispatch } = this.props;
    return (
      <Calendar dates={dates} events={events} {...bindActionCreators(CalendarActions, dispatch)} />
    );
  }
}
