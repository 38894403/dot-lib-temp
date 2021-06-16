
/**
 * 获取时间
 */
 function getTime() {
  var myDate = new Date()
  // myDate.getFullYear()   //获取系统的年
  // myDate.getMonth() + 1  //获取系统月份，由于月份是从0开始计算，所以要加1
  return {
    day: myDate.getDate(),
    h: myDate.getHours(),
    m: myDate.getMinutes(),
    s: myDate.getSeconds(),
  }
}

export {
  getTime
}