function searchArr(arr, key) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === key) {
            return mid;
        }

        else if (arr[mid] >= arr[low]) {
            if (key >= arr[low] && key < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        else {
            if (key > arr[mid] && key <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}

let arr = [ 3,4,5,1,2];
let key = 3;
console.log(searchArr(arr,key));