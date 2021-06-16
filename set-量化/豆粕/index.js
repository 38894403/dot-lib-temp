import { getTime } from './utils.js'

let timer,
  time
function init() {
  timer = setInterval(() => {
    time = getTime()
    if ([15, 16, 17, 18, 19, 20, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8].includes(time.h)) {
      clearInterval(timer)
      return
    }
    $.get('https://push2.eastmoney.com/api/qt/clist/get?pn=1&fs=m:114+t:4&fields=f12,f2,f3').then(res => {
      const dp2109 = res.data.diff[2]
      handleData(dp2109)
    })
  }, 2000)
}

const dataArr = ['2100', '2115', '2130', '2200', '2215', '2230', '2245', '0900', '0930', '0945', '1000', '1030', '1045', '1100', '1115', '1330', '1345', '1400', '1415', '1430', '1445']
/**
 * 数据格式 [开，收，低，高]
 */
let result = {
}
dataArr.forEach(item => {
  result[item] = new Array(4)
})
let preData = JSON.parse(localStorage.getItem('preData'))
if (preData[1445][1]) {
  result = preData
}

/**
 * 数据处理
 */
function handleData(data) {
  let price = data.f2
  // console.log(data)

  let min15 = `${String(time.h).length > 1 ? time.h : '0' + time.h}${String(time.m).length > 1 ? time.m : '0' + time.m}`

  while (!dataArr.includes(String(min15))) {
    // if (['2300', '0800', '0915', '1130', '1230', '1500'].includes(min15)) {
    //   break
    // }
    min15 = ~~min15 - 1
  }
  let curResult = result[min15]
  if (!curResult[0]) {
    curResult[0] = price
  }
  curResult[1] = price
  if (!curResult[3] || price < ~~curResult[2]) {
    curResult[2] = price
  }
  if (!curResult[3] || price > ~~curResult[3]) {
    curResult[3] = price
  }
  // console.log(min15)
  localStorage.setItem('preData', JSON.stringify(result))

  let dom = document.querySelector('.result')
  dom.innerHTML = JSON.stringify(result)
}

export {
  init
}