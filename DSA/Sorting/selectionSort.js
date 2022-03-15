//Time Complexity: O(n*n)
//Space: O(1)

function selection(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        var min = i
        for (var j = i + 1; j < n; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        var temp = arr[min];
        arr[min] = arr[j];
        arr[j] = temp;
    }
    return arr;
}