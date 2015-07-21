import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import CalendarWeek from './CalendarWeek';

export default class Calendar extends Component {
  static propTypes = {
    incrementWeek: PropTypes.func.isRequired,
    decrementWeek: PropTypes.func.isRequired,
    dates: React.PropTypes.shape({
      startDate: function(props, propName) {
        return moment.isMoment(props[propName]);
      }
    }).isRequired
  };

  render() {
    const { dates, incrementWeek, decrementWeek } = this.props;

    return (
      <CalendarWeek dates={dates}
        incrementWeek={incrementWeek}
        decrementWeek={decrementWeek} />
    );
  }
}
