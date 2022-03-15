//first we can compare every element and check it i!j then multiply

//BRUTE FORCE
//T.C = O(n^2)
//S.C = O(1)

function product(arr) {
    let n = arr.length, res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                res.push(arr[i] * arr[j])
            }
        }
    }
    return res;
}

//--------------------------------------------------------------------------------------------

//TWO Array Approch
// Create two arrays left and right of size n.
// assign left is 1 and multiply current element with left and and assign right and multiply with right element
// and multiply both left and right arrays

//T.C = O(n)
//S.C = O(n)

function productArray(arr, n) {

    // Initialize memory to all arrays
    let left = new Array(n);
    let right = new Array(n);
    let prod = new Array(n);

    let i, j;

    /* Left most element of left array is always 1 */
    left[0] = 1;

    /* Rightmost most element of right array is always 1 */
    right[n - 1] = 1;

    for (i = 1; i < n; i++)
        left[i] = arr[i - 1] * left[i - 1];
    /* Construct the right array */
    for (j = n - 2; j >= 0; j--)
        right[j] = arr[j + 1] * right[j + 1];

    /* Construct the product array using left[] and right[] */
    for (i = 0; i < n; i++)
        prod[i] = left[i] * right[i];

    /* print the constructed prod array */
    for (i = 0; i < n; i++)
        console.log(prod[i] + " ");
}


//--------------------------------------------------------------------------------------------

//One Array Approch

// Allocate memory for the product array  and Initialize the product array as 1 temp variable contains
// product of elements on left side excluding arr[i]
//  Initialize temp to 1 for product on right side  temp variable contains  product of elements on right side
// excluding arr[i]
//Time Complexity: O(n). 
//Space Complexity: O(n)

function productArray(arr, n) {

    var i, temp = 1;
    var prod = Array(n).fill(0);

    for (j = 0; j < n; j++)
        prod[j] = 1;

    for (i = 0; i < n; i++) {
        prod[i] = temp;
        temp *= arr[i];
    }

    temp = 1;

    for (i = n - 1; i >= 0; i--) {
        prod[i] *= temp;
        temp *= arr[i];
    }

    for (i = 0; i < n; i++)
        console.log(prod[i] + " ");

    return;
}