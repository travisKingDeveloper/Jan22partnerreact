import moment from 'moment';

export default function getDateInformation() {
  const now = moment().startOf('week');
  const week = [ now ];

  let i = 0;
  while(week.length < 7){
    week.push(moment(now).add('day', ++i));
  }

  return week
}