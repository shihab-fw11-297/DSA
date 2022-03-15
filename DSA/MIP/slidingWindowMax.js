//Time Complexity: O(N * K). 

function printKMax(arr,n,k)
{
    let j, max,s="";
    for (let i = 0; i <= n - k; i++)
    {
        max = arr[i];
 
        for (j = 1; j < k; j++)
        {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        s+=max + " ";
    }   
}


let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let n =arr.length;
let k = 3;
let ans = printKMax(arr, n, k);
console.log(ans);