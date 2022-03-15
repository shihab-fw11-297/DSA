// count minimum sum and check with current sum is it lessthan minimum sum then swap it

//T.C = O(n^2)
//S.C = O(1)

function zerosum(arr) {

    let n = arr.length, minSum = 0, sum = 0, minL, minR;

    if (n < 2) { return false }

    minSum = arr[0] + arr[1], minL = 0, minR = 1;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            sum += arr[i] + arr[j];

            if (Math.abs(minSum) > Math.abs(sum)) {
                minSum = sum;
                minL = i;
                minR = j;
            }
        }
    }
    console.log(arr[minL], arr[minR]);
}


//--------------------------------------------------------------------------------------------

//Sorting and 2 Pointer Approch

//T.C = Onlogn
//S.C = O(1)


function zerosum(arr) {
    arr.sort((a, b) => { return a - b })
    let n = arr.length, sum = 0, l = 0, r = n - 1, minSum = 0, minL = l, minR = n - 1;

    if (n < 2) { return false }
    while (l < r) {
        sum = arr[l] + arr[r];

        if (Math.abs(minSum) > Math.abs(sum)) {
            minSum = sum;
            minL = l;
            minR = r;
        }
        if (sum < 0) {
            l++;
        }
        else {
            r--;
        }
    }
    console.log(arr[minL], arr[minR]);
}