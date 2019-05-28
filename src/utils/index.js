export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const repairZero = num => {
  num += ''
  if (num.length < 2) {
    num = '0' + num
  }
  return num
}

export const range = (size, start = 0) => {
  let arr = []
  for (let i = 0; i < size; i++) {
    arr[i] = start + i
  }
  return arr
}

export const parseToYearAndMonth = str => {
  const date = str ? new Date(str) : new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  }
}
