import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import '../stylesheets/CalendarWeekHeader.scss';

export default class CalendarWeekHeader extends Component {
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
    const daysInWeek = 7;

    var days = [];
    for (var i = 0; i < daysInWeek; i++) {
      days.push(dates.startDate.clone().add(i, 'day'));
    }

    var dayHeaders = days.map((day) => {
      var classNames = [ 'cal-week-header-label' ];
      if (day.day() === 0 || day.day() === 6) {
        classNames.push('cal-week-header-label--weekend');
      }
      if (day.isSame(moment(), 'day')) {
        classNames.push('cal-week-header-label--today');
      }
      return (
        <li key={day} className={classnames(classNames)}>{day.format('ddd D/M')}</li>
      );
    });

    return (
      <div className="cal-week-header">
        <button className="cal-week-header-button cal-week-header-button--prev" onClick={decrementWeek}></button>
        <ul className="cal-week-header-dates">
          {dayHeaders}
        </ul>
        <button className="cal-week-header-button cal-week-header-button--next" onClick={incrementWeek}></button>
      </div>
    );
  }
}
