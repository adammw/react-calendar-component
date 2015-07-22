import React, { Component, PropTypes } from 'react';
import CalendarWeekHeader from './CalendarWeekHeader';
import CalendarWeekContent from './CalendarWeekContent';
import '../stylesheets/CalendarWeek.scss';
import * as CustomPropTypes from '../prop_types';

export default class CalendarWeek extends Component {
  static propTypes = {
    incrementWeek: PropTypes.func.isRequired,
    decrementWeek: PropTypes.func.isRequired,
    dates: React.PropTypes.shape({
      startDate: CustomPropTypes.moment
    }).isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        startDate: CustomPropTypes.moment,
        endDate: CustomPropTypes.moment
      })
    )
  };

  render() {
    const { dates, events, incrementWeek, decrementWeek } = this.props;

    return (
      <div className="cal-week">
        <CalendarWeekHeader dates={dates}
          incrementWeek={incrementWeek}
          decrementWeek={decrementWeek} />
        <CalendarWeekContent dates={dates} events={events} />
      </div>
    );
  }
}
