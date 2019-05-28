export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const repairZero = num => {
  if (num.length < 2) {
    num = '0' + num
  }
  return num
}
