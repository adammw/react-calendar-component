import React, { Component } from 'react';
import CalendarSidebar from './CalendarSidebar';
import CalendarDay from './CalendarDay';
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
      var dailyEvents = events.filter((event) => {
        return (event.startDate.isBefore(day, 'day') || event.startDate.isSame(day, 'day')) &&
          (event.endDate.isAfter(day, 'day') || event.endDate.isSame(day, 'day'));
      });
      return (
        <CalendarDay key={day} date={day} events={dailyEvents} />
      );
    });

    var height = 1024;

    return (
      <div className="cal-week-content">
        <CalendarSidebar height={height}/>
        <ul className="cal-week-days" style={ { minHeight: height } }>
          {dayComponents}
        </ul>
      </div>
    );
  }
}
