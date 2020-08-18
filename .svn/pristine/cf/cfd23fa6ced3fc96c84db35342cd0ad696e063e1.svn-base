
// 获取当前时分秒
export function getHMS() {
  var myDate = new Date();
  let h = myDate.getHours(); //获取当前小时数(0-23)
  let m = myDate.getMinutes(); //获取当前分钟数(0-59)
  let s = myDate.getSeconds(); //获取当前秒数(0-59)
  if (Number(h) < 10) h = '0' + h
  if (Number(m) < 10) m = '0' + m
  if (Number(s) < 10) s = '0' + s 
  return `${h}:${m}:${s}`
}

// 将日期往前推 currentDay 天
export function timCurrentDay(currentDay) {
  var time = (new Date).getTime() - currentDay * 24 * 60 * 60 * 1000;
  var tragetTime = new Date(time);
  var month = tragetTime.getMonth();
  var day = tragetTime.getDate();
  tragetTime = tragetTime.getFullYear() + "-" + (tragetTime.getMonth() > 9 ? (tragetTime.getMonth() + 1) : "0" + (tragetTime.getMonth() + 1)) + "-" + (tragetTime.getDate() > 9 ? (tragetTime.getDate()) : "0" + (tragetTime.getDate()));
  return tragetTime;
}