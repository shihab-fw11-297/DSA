function printRepeating(arr, n)
{
    for (let i = 0; i < n; i++) {
        var abs_value = Math.abs(arr[i]);
        if (arr[abs_value] >= 0){
        arr[abs_value] = -arr[abs_value];
        console.log(arr[abs_value]);
        }
        else
            console.log(abs_value + " ");
    }
}

// Driver Code
let arr = [ 1,2,2];
let arr_size = arr.length;
printRepeating(arr, arr_size);