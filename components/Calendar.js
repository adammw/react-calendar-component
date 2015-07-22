import React, { Component, PropTypes } from 'react';
import CalendarWeek from './CalendarWeek';
import * as CustomPropTypes from '../prop_types';

export default class Calendar extends Component {
  static propTypes = {
    incrementWeek: PropTypes.func.isRequired,
    decrementWeek: PropTypes.func.isRequired,
    dates: PropTypes.shape({
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
      <CalendarWeek dates={dates}
        events={events}
        incrementWeek={incrementWeek}
        decrementWeek={decrementWeek} />
    );
  }
}
