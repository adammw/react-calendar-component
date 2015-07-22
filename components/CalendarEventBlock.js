import React, { Component } from 'react';
import '../stylesheets/CalendarEventBlock.scss';


export default class CalendarEventBlock extends Component {
  render() {
    const { date, event } = this.props;

    var startedToday = event.startDate.isSame(date, 'day');
    var dailyStart = startedToday ? event.startDate.diff(date, 'day', true) : 0;
    var dailyDuration = Math.min(1 - dailyStart, event.endDate.diff( startedToday ? event.startDate : date, 'day', true));

    var style = {
      top: 100 * dailyStart + '%',
      height: 100 * dailyDuration + '%'
    };

    return (
      <div className="cal-event-block" style={style}>{event.name}</div>
    );
  }
}
