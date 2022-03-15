//Time complexity: O(n2).
//Space complexity: O(1).


function maxSubArrayProduct(arr, n)
{
    // Initializing result
    let result = arr[0];
 
    for (let i = 0; i < n; i++)
    {
        let mul = arr[i];
        // traversing in current subarray
        for (let j = i + 1; j < n; j++)
        {
            // updating result every time
            // to keep an eye over the maximum product
            result = Math.max(result, mul);
            mul *= arr[j];
        }
        // updating the result for (n-1)th index.
        result = Math.max(result, mul);
    }
    return result;
}

//DP
//Time complexity: O(n).
//Space complexity: O(1).
function maxSubArrayProduct(arr,size) {
    let maxProduct = arr[0]
    let imax = arr[0]
    let imin = arr[0]
    for(let i=1 ; i<size; i++) {
        if(arr[i]<0) 
            swap(imax,imin)
        imax = Math.max(arr[i], imax * arr[i])
        imin = Math.min(arr[i],imin * arr[i])
        maxProduct = Math.max(maxProduct, imax)
    }
    return maxProduct
}

function swap(a,b){
    let temp = a;
        a = b;
        b = temp;
}

let arr = [9, -6, 10, 3];
let n = arr.length;
let largest = maxSubArrayProduct(arr,n);

console.log(largest);