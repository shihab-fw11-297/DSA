//brute force approch

//Time Complexity: O(n^3)
//Space Complexity: O(1)

function find3Numbers(A, arr_size, sum) {
    let l, r;
    for (let i = 0; i < arr_size - 2; i++) {
        for (let j = i + 1; j < arr_size - 1; j++) {
            for (let k = j + 1; k < arr_size; k++) {
                if (A[i] + A[j] + A[k] == sum || A[i] + A[j] + A[k] > sum) {
                    console.log("Triplet is " + A[i] + ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }
    return false;
}

//--------------------------------------------------------------------------------------------

//Sorting and 2 Pointer Approch

//T.C = Onlogn
//S.C = O(1)

function find3Numbers(A, n, sum) {
    arr.sort((a, b) => { return a - b })
    let l, r;

    for (let i = 0; i < n - 2; i++) {
        l = i + 1;
        r = n - 1;
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum) {
                console.log("Triplet is " + A[i] + ", " + A[l] + ", " + A[r]);
                return true;
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else
                r--;
        }
    }
    return false;
}
