function formatAs12HourClock(time) {
  const mints = time.slice(-2);
  const hours = Number(time.slice(0, 2));

  if (hours == "00") {
    return `12:${mints} am`;
  }
  if (hours === 12) {
    return `${hours}:${mints} pm`;
  }
  if (hours > 12 && hours < 22) {
    return `0${hours - 12}:${mints} pm`;
  }
  if (hours >= 22) {
    return `${hours - 12}:${mints} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
