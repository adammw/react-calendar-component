import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import '../stylesheets/CalendarWeekDay.scss';

function createNowMarker() {
  var secondsThruDay = moment().unix() - moment().startOf('day').unix();
  var fractionOfDay = secondsThruDay / (60 * 60 * 24);
  // TODO: (ab)use css animations to make it animate downwards over the course of a day
  // and/or re-render state when nessicary
  return (
    <div className="now-marker" style={ { top: `${fractionOfDay * 100}%`} }></div>
  );
}

export default class CalendarWeekDay extends Component {
  render() {
    const { date, events } = this.props;

    var timeSlots = [];
    for (var i = 0; i < (24 * 2); i++) {
      timeSlots.push(<li key={i} className="time-slot" />);
    }

    var isToday = date.isSame(moment(), 'day');
    var contentClassNames = ['cal-week-day-background'];

    if (isToday) {
      contentClassNames.push('cal-week-day-background--today');
    }

    return (
      <div className="cal-week-day">
        {isToday ? createNowMarker() : null}
        <ul className={classnames(contentClassNames)}>
          {timeSlots}
        </ul>
      </div>
    );
  }
}
