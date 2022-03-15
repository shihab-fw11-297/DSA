//Time Complexity: O(n*log(n))
//Space: O(n)

function quickSort(array) {
  if (array.length == 1) {
      return array
  }
  let p = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < p) {
          leftArr.push(array[i])
      }
      else {
          rightArr.push(array[i])
      }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
      return [...quickSort(leftArr), p, ...quickSort(rightArr)]
  }
  else if (leftArr.length > 0) {
      return [...quickSort(leftArr), p]
  }
  else {
      return [p, ...quickSort(rightArr)]
  }
}