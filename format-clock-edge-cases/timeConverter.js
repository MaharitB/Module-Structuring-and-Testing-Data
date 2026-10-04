function formatAs12HourClock(time) {

  const mints = time.slice(-2);
  const hours = Number(time.slice(0, 2));
  if (time === "24:00"){
    return `12:00 am`
  }
  if(time ==="12:00"){
    return `12:00 pm`
  }
   if(hours=== 12) {
     return `${hours}:${mints} pm`
  }
  if (hours > 12) {
    return `${hours - 12}:${mints} pm`;
  }
  return `${time} am`;
}

export {formatAs12HourClock};
