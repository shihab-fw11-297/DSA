//Time complexity: O(n²).
//Space complexity: O(1).

// function maxWater(arr, n) {
//     let res = 0;
//     for (let i = 1; i < n - 1; i++) {
//         let left = arr[i];

//         for (let j = 0; j < i; j++) {
//             left = Math.max(left, arr[j]);

//         }

//         let right = arr[i];
//         for (let j = i + 1; j < n; j++) {
//             right = Math.max(right, arr[j]);
//         }
//         res += Math.min(left, right) - arr[i];
//     }
//     return res;
// }

//Time complexity: O(n).
//Space complexity: O(n).

function maxWater(arr,n) {
    let left = new Array(n);
    let right = new Array(n);
    let water = 0;

    left[0] = arr[0];

    for (let i = 1; i < n; i++)
        left[i] = Math.max(left[i - 1], arr[i]);

    right[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--)
        right[i] = Math.max(right[i + 1], arr[i]);

    for (let i = 0; i < n; i++)
        water += Math.min(left[i], right[i]) - arr[i];

    return water;
}



//Time complexity: O(n)
//Space complexity: O(1)

// function maxWater(height, size) {
//     let lo = 0, hi = size - 1
//     let leftMax = 0, rightMax = 0, water = 0;

//     while (lo < hi) {
//         if (height[lo] > leftMax)
//             leftMax = height[lo]

//         if (height[hi] > rightMax)
//             rightMax = height[hi]

//         if (leftMax < rightMax) {
//             water += (leftMax - height[lo])
//             lo = lo + 1
//         } else {
//             water += (rightMax - height[hi])
//             hi = hi - 1
//         }
//     }
//     return water
// }
let arr = [0, 1, 0, 2, 1, 0,
    1, 3, 2, 1, 2, 1];
let n = arr.length;

console.log(maxWater(arr, n));