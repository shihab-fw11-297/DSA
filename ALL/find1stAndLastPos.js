function lowerBound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == k) {
            ans = mid
            high = mid - 1
        }
        else if (arr[mid] > k) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return ans
}

function upperBound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > k)
            high = mid - 1;
        else if (arr[mid] < k)
            low = mid + 1;
        else {
            ans = mid;
            low = mid + 1;
        }
    }
    return ans
}

let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let key = 8;
console.log(lowerBound(arr, key));
console.log(upperBound(arr, key));