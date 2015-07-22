import moment from 'moment';

function defaultState() {
  return [
    {
      id: 1,
      startDate: moment().startOf('day').add(1, 'day').hour(6),
      endDate: moment().startOf('day').add(1, 'day').hour(7),
      name: 'Event Test 1'
    },
    {
      id: 2,
      startDate: moment().startOf('day').add(1, 'day').hour(9),
      endDate: moment().startOf('day').add(1, 'day').hour(10).minutes(30),
      name: 'Event Test 2'
    },
    {
      id: 3,
      startDate: moment().startOf('day').subtract(1, 'day').hour(8).minutes(45),
      endDate: moment().startOf('day').subtract(1, 'day').hour(9).minutes(15),
      name: 'Event Test 3'
    },
    {
      id: 4,
      startDate: moment().startOf('day').subtract(1, 'day').hour(14),
      endDate: moment().startOf('day').hour(7).minutes(30),
      name: 'Event Test 4'
    },
    {
      id: 5,
      startDate: moment().startOf('day').add(1, 'day').hour(19),
      endDate: moment().startOf('day').add(3, 'day').hour(1),
      name: 'Event Test 5'
    },
    {
      id: 6,
      startDate: moment().startOf('day').add(1, 'day').hour(9).minutes(45),
      endDate: moment().startOf('day').add(1, 'day').hour(11).minutes(45),
      name: 'Event Test 6'
    }
  ];
}

export default function events(state = defaultState(), action) {
  switch (action.type) {
  default:
    return state;
  }
}
