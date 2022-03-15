// Time complexity   : O(log n).
// space complexity  :  O(1)

function searchArr(arr, k) {
    if (arr.length === 0) {
        return -1;
    }

    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] == k) {
            return mid;
        }

        if (arr[mid] < k) {
            lo = mid + 1;
        }
        else if (arr[mid] > k) {
            hi = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};