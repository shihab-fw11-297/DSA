function floorAndCeil(arr, key) {
    let n= arr.length;

    let f = -1, c = -1, low = 0, high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if(key == arr[mid]){
            f = mid;
            c = mid;
            break;
        }

        if(key > arr[mid]){
            f = mid;
            low = mid + 1;
        }
        else {
            c = mid;
            high = mid - 1;
        }
    }
    return f + " " + c;
}