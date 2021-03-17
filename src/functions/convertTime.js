/**optimized by k-gun (Kerem Güneş)
 * 
 * @param {number} time
 */
export default function convertTime(time) {

  let ret = [0, 0];
  // Do calculations if have time (also !NaN = true).
  if (time) {
    ret = [
      ~~(time % 3600 / 60), // Minutes.
      ~~(time % 60)         // Seconds.
    ];
  }
  // Add item's paddings converting to string.
  ret = ret.map(re => `${re}`.padStart(2, '0'));

  return ret.join(':');
}
