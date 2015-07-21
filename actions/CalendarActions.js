import { INCREMENT_WEEK, DECREMENT_WEEK } from '../constants/ActionTypes';

export function incrementWeek() {
  return {
    type: INCREMENT_WEEK
  };
}

export function decrementWeek() {
  return {
    type: DECREMENT_WEEK
  };
}
