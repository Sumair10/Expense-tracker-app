var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var d = new Date();
var dayName = d.toString().split(" ")[0];
let dateObj = new Date();
let name = month[d.getMonth()];
let myDate = dayName + " " + dateObj.getUTCDate() + ", " + name;

export default {
  myDate,
};
