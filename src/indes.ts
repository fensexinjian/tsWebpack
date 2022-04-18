/*
 * @Author: your name
 * @Date: 2022-04-18 17:38:02
 * @LastEditTime: 2022-04-18 17:48:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\src\indes.ts
 */
//获取当前年月日星期几几点几分几秒并打印
//获取当前年月日星期几几点几分几秒并打印
function getTimer() {
  var date = new Date()
  var week = ['星期日', '星期一', '星期二', '星期三', '星	期四', '星期五', '星期六']
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var datee = date.getDate()
  var day = date.getDay()
  var time = year + '年' + month + '月' + datee + '日 	' + week[day]

  return time
}
export default getTimer()