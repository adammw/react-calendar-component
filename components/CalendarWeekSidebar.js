import React, { Component } from 'react';
import moment from 'moment';
import '../stylesheets/CalendarWeekSidebar.scss';

export default class CalendarWeekSidebar extends Component {
  render() {
    const { height } = this.props;

    var times = [];
    for(var h = 0; h < 24; h++) {
      var time = moment().hours(h);
      times.push(
        <li key={time} className="time">{time.format('h a')}</li>
      );
    }
    return (
      <ul className="cal-week-sidebar" style={ { minHeight: height } }>
        {times}
      </ul>
    );
  }
}
