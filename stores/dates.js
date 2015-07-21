import { INCREMENT_WEEK, DECREMENT_WEEK } from '../constants/ActionTypes';
import moment from 'moment';

function defaultState() {
  return {
    startDate: moment().startOf('week')
  };
}

export default function dates(state = defaultState(), action) {
  switch (action.type) {
  case INCREMENT_WEEK:
    return {
      startDate: state.startDate.clone().add(1, 'week')
    };
  case DECREMENT_WEEK:
    return {
      startDate: state.startDate.clone().subtract(1, 'week')
    };
  default:
    return state;
  }
}
