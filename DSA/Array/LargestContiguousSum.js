//We would use nested loops to determine all the possible subarray sums and return the maximum among them.
// For this, we generate all (i, j): i <= j pairs and calculate the sum between.

//T.C = O(n^3) 
//S.C = O(1)

function subArrSum(arr) {
    let n = arr.length, max = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[i];
            }
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

// Using 2 nested loops
//The outer loop picks the beginning element, the inner loop finds the maximum possible sum with the 
//first element picked by the outer loop and compares this maximum with the overall maximum.

//Time Complexity: O(n^2)
//Space Complexity: O(1)

function subArrSum(arr) {
    let n = arr.length, max = 0;

    for (let i = 0; i < n - 1; i++) {
        let sum = 0
        for (let j = i; j < n - 1; j++) {
            sum += arr[j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

//Kadanes's Algorithm

//The idea followed in Kadane’s algorithm is to maintain the maximum possible 
//sum of a subarray ending at an index without needing to store the numbers in an auxiliary array.

//Time Complexity: O(n)
//Space Complexity: O(1)

function subArrSum(arr) {
    let n = arr.length, sum = 0, curSum = 0;

    for (let i = 0; i < n; i++) {
        curSum = sum + arr[i];
        if (curSum > sum) {
            sum = curSum;
        }
        if (curSum < 0) {
            curSum = 0;
        }
    }
    return sum;
}

