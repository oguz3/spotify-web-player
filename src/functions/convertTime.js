/**
 * @param {number} time
 */
export default function convertTime(time) {
  let minutes = Math.floor(~~((time % 3600) / 60));
  let seconds = Math.floor(time % 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return isNaN(time) ? '0:00' : `${minutes}:${seconds}`;
}
