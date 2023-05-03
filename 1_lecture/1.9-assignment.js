/* Seconds in a Year: 
  - days
  -hours
  - minutes
  - seconds in a year

*/


const daysInYear = 365;
const hoursInDay = 24;
const minutesInHour = 60;

const secondsInYear = daysInYear * hoursInDay * minutesInHour * 60

console.log(new Intl.NumberFormat().format(secondsInYear) + " seconds in a year")