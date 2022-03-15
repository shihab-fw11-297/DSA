//first we can before ith loop sum added  and  afer 
//th ith loop means right-side sum added and check both sum is equal or not and i!=0 and j!=n-1  

//T.C = O(n^2)
//S.C = O(1)

function equibrilium(arr) {
    let n = arr.length, leftSum, rightSum;

    for (let i = 0; i < n; i++) {
        leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        rightSum = 0;
        for (let j = i + 1; j < n; j++) {
            rightSum += arr[j];
        }
        if (leftSum == rightSum && i != 0 && j != n - 1) {
            return i;
        }
    }
    return -1;
}


//--------------------------------------------------------------------------------------------

//TWO Array Approch

//T.C = O(n)
//S.C = O(n)


function equilibrium(a, n) {
    if (n == 1)
        return 0;

    var forward = new Array(0);
    var rev = new Array(0);

    // Taking the prefixsum from front end array
    for (let i = 0; i < n; i++) {
        if (i) {
            forward[i] = forward[i - 1] + a[i];
        }
        else {
            forward[i] = a[i];
        }
    }


    // Taking the prefixsum from back end of array
    for (let i = n - 1; i > 0; i--) {
        if (i <= n - 2) {
            rev[i] = rev[i + 1] + a[i];
        }
        else {
            rev[i] = a[i];
        }
    }

    for (let i = 0; i < n; i++) {
        if (forward[i] == rev[i]) {
            return i;
        }
    }
    return -1;

}


//--------------------------------------------------------------------------------------------

//Optimized Approch

//T.C = O(n)
//S.C = O(1)

//Find sum of the whole array and then sum is now right sum for index i remove element before check

function equilibrium(arr, n) {
    let sum = 0; leftsum = 0;

    for (let i = 0; i < n; ++i)
        sum += arr[i];

    for (let i = 0; i < n; ++i) {
        sum -= arr[i];
        if (leftsum == sum)
            return i;

        leftsum += arr[i];
    }
    return -1;
}