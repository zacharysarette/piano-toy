export function contains (arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }
  return false
}

export function removeFirstElement (arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      arr.splice(i, 1)
      return
    }
  }
}

function isSameDay (nowDate, targetDate) {
  if (nowDate.getDate() !== targetDate.getDate()) {
    return false
  }
  if (nowDate.getMonth() !== targetDate.getMonth()) {
    return false
  }
  if (nowDate.getYear() !== targetDate.getYear()) {
    return false
  }
  return true
}

function isSameYear (nowDate, targetDate) {
  if (nowDate.getYear() !== targetDate.getYear()) {
    return false
  }
  return true
}

export function formatDate (nowDate, targetDate, threeLetterMonths) {
  if (isSameDay(nowDate, targetDate)) {
    return ('00' + targetDate.getHours()).slice(-2) +
      ':' +
      ('00' + targetDate.getMinutes()).slice(-2)
  } else if (isSameYear(nowDate, targetDate)) {
    return threeLetterMonths[targetDate.getMonth()] +
      ' ' +
     ('0' + targetDate.getDate()).slice(-2)
  } else {
    return targetDate.getFullYear() +
      '/' +
      targetDate.getMonth() +
      '/' +
      targetDate.getDate()
  }
}

export function compareAZ (a, b) {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}
