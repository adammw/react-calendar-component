import React, { Component } from 'react';
import CalendarApp from './CalendarApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <CalendarApp />}
      </Provider>
    );
  }
}
