//brute force o(n)2  
// function getPairsCount(arr, n, sum) {
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] + arr[j] == sum) {
//                 console.log(i + ' ' + j);
//             }
//         }
//     }
// }

function getPairsCount(arr,n,k){
    arr.sort((a,b)=>{ return a-b});

    let low = 0;
    let high = n - 1;
    let cnt=0;
    while (low < high)
    {
        if (arr[low] + arr[high] == k)
        {
            console.log(low + ' ' + high);
           
        }

        (arr[low] + arr[high] <k)? low++: high--;
    }
    return cnt;
}


let arr = [ 1, 5, 7, -1, 5 ];
let n = arr.length;
let sum = 6;
getPairsCount(arr, n, sum);