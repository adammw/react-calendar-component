import React, { Component } from 'react';
import CalendarWeekSidebar from './CalendarWeekSidebar';
import CalendarWeekDay from './CalendarWeekDay';
import '../stylesheets/CalendarWeekContent.scss';

export default class CalendarWeekContent extends Component {
  render() {
    const { dates, events } = this.props;
    const daysInWeek = 7;

    var days = [];
    for (var i = 0; i < daysInWeek; i++) {
      days.push(dates.startDate.clone().add(i, 'day'));
    }

    var dayComponents = days.map((day) => {
      return (
        <CalendarWeekDay key={day} date={day} />
      );
    });

    var height = 1024;

    return (
      <div className="cal-week-content">
        <CalendarWeekSidebar height={height}/>
        <ul className="cal-week-days" style={ { minHeight: height } }>
          {dayComponents}
        </ul>
      </div>
    );
  }
}
