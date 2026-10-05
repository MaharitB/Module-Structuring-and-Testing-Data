function formatAs12HourClock(time) {
  const stringHours = time.slice(0, 2);
  const mints = time.slice(-2);
  const hours = Number(time.slice(0, 2));
 
  if (stringHours == "00") {
    return `12:${mints} am`;
  }
  if (hours === 12) {
    return `${hours}:${mints} pm`;
  }
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
