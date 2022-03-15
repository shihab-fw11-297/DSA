//first we can before ith loop max(left side) and  aferth ith loop means right-side and check store 
//value by formula  min(a,b) – array[i],


//T.C = O(n^2)
//S.C = O(n)

function maxWater(arr) {
    let n = arr.length, res = [];

    for (let i = 0; i < n - 1; i++) {
        let left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        let right = arr[i];
        for (let k = i + 1; k < n; k++) {
            right = Math.max(right, arr[k]);
        }

        // Update maximum water value
        res += Math.min(left, right) - arr[i];
    }
    return res;
}


//--------------------------------------------------------------------------------------------

//TWO Array Approch
// Create two arrays left and right of size n.
// assign max valuein left array by checking left last element and store it in left array
// assign max valuein right array by checking right last element and store it in right array
// Update maximum water value by formula  min(a,b) – array[i],

//T.C = O(n)
//S.C = O(n)

function maxWater(arr) {
    let n = arr.length, left = new arr(n), right = new arr(n), water = 0;

    left[0] = arr[0];

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], arr[i]);
    }

    right[n - 1] = arr[n - 1];

    for (let i = n - 1; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], arr[i]);
    }

    for (let i = 0; i < n; i++) {
        water += Math.min(left[i], right[i]) - arr[i];
    }
    return water;
}


//--------------------------------------------------------------------------------------------


//Space Optimization for the above Solution

//Calculate water trapped on smaller elements out of A[lo] and A[hi] first and move the 
//pointers till lo doesn’t cross hi.
//T.C = O(n)
//S.C = O(1)

function findWater(arr) {
    let result = 0, left_max = 0, right_max = 0, lo = 0, hi = arr.length - 1, n = arr.length;

    while (lo <= hi) {
        if (arr[lo] < arr[hi]) {
            if (arr[lo] > left_max)
                // update max in left
                left_max = arr[lo];
            else
                // water on curr element = // max - curr
                result += left_max - arr[lo];
            lo++;
        }
        else {
            if (arr[hi] > right_max)
                // update right maximum
                right_max = arr[hi];
            else
                result += right_max - arr[hi];
            hi--;
        }
    }
    return result;
}