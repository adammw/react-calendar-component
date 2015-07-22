import React, { Component } from 'react';
import '../stylesheets/CalendarEventBlock.scss';
import classnames from 'classnames';

export default class CalendarEventBlock extends Component {
  render() {
    const { date, event } = this.props;

    var startedThisDay = event.startDate.isSame(date, 'day');
    var dailyStart = startedThisDay ? event.startDate : date;
    var dailyStartPosition = dailyStart.diff(date, 'day', true);
    var dailyDurationHeight = Math.min(1 - dailyStartPosition, event.endDate.diff( dailyStart, 'day', true));

    var style = {
      top: 100 * dailyStartPosition + '%',
      height: 100 * dailyDurationHeight + '%'
    };

    var titleClassNames = ['title'];
    if ( event.endDate.diff( dailyStart, 'minutes' ) <= 30 ) {
      titleClassNames.push('title--one-line');
    }

    var formattedTime = event.startDate.minutes() === 0 ? event.startDate.format('ha') : event.startDate.format('h:mma');
    var time = (
      <div className="time">
        <span className="time--hours">{formattedTime}</span>
      </div>
    );

    return (
      <div className="cal-event-block" style={style}>
        <span className={classnames(titleClassNames)}>{event.name}</span>
        {startedThisDay && time}
      </div>
    );
  }
}
