function parseDate(date?: string | number): string {
  let theDate = date ? new Date(date) : new Date();
  const currentYear = theDate.getFullYear();

  const currentMonth = theDate.getMonth() + 1;

  const currentDay = theDate.getDate();

  const together = [currentYear, currentMonth, currentDay].join("/");

  return together;
}
function parseTimeAmPm(date: string | number) {
  let theDate = new Date(date);

  var hours = theDate.getHours();
  var minutes: string | number = theDate.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function deffInHours(d1: Date, d2: Date) {
  const onHour = 60 * 60 * 1000; // milliseconds in a day
  const diff = Math.abs(d1.getTime() - d2.getTime()); // difference in milliseconds
  return Math.floor(diff / onHour); // convert milliseconds to days and round to nearest integer
}
export { parseDate, parseTimeAmPm, deffInHours };
