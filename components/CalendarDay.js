import React, { Component, PropTypes } from 'react';
import CalendarEventBlock from './CalendarEventBlock';
import classnames from 'classnames';
import moment from 'moment';
import * as CustomPropTypes from '../prop_types';
import '../stylesheets/CalendarDay.scss';

function percentageOfDay(date) {
  var secondsThruDay = date.unix() - date.startOf('day').unix();
  var fractionOfDay = secondsThruDay / (60 * 60 * 24);
  return fractionOfDay * 100;
}

function createNowMarker() {
  // TODO: (ab)use css animations to make it animate downwards over the course of a day
  // and/or re-render state when nessicary
  var style = {
    top: `${percentageOfDay(moment())}%`
  };
  return (
    <div className="now-marker" style={style}></div>
  );
}

export default class CalendarDay extends Component {
  static propTypes = {
    date: CustomPropTypes.moment,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        startDate: CustomPropTypes.moment,
        endDate: CustomPropTypes.moment
      })
    )
  };

  render() {
    const { date, events } = this.props;

    var timeSlots = [];
    for (var i = 0; i < (24 * 2); i++) {
      timeSlots.push(<li key={i} className="time-slot" />);
    }

    var isToday = date.isSame(moment(), 'day');
    var contentClassNames = ['cal-day-background'];

    if (isToday) {
      contentClassNames.push('cal-day-background--today');
    }

    var eventBlocks = events.map((event) => {
      return (
        <CalendarEventBlock key={event.id} date={date} event={event} />
      );
    });

    return (
      <div className="cal-day">
        {isToday ? createNowMarker() : null}
        <ul className={classnames(contentClassNames)}>
          {timeSlots}
        </ul>
        <div className="cal-day-events">
          {eventBlocks}
        </div>
      </div>
    );
  }
}
