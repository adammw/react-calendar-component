import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import CalendarWeekHeader from './CalendarWeekHeader';
import CalendarWeekContent from './CalendarWeekContent';
import '../stylesheets/CalendarWeek.scss';

export default class CalendarWeek extends Component {
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
