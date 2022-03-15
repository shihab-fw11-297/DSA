//Sorting approch

//onlog(n)

arr.sort((a, b) => { return a - b })

//--------------------------------------------------------------------------------------------

//Counting Approch

//Time Complexity : O(n) 
//Space Complexity : O(n) 

function segregate0and1(arr, n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 0)
            count++;
    }

    for (let i = 0; i < count; i++)
        arr[i] = 0;

    for (let i = count; i < n; i++)
        arr[i] = 1;

    console.log(arr.join(" "));
}

//--------------------------------------------------------------------------------------------

// check from left is it 0 or not and check from right and if is it 1 or not than swap it

//Time Complexity: O(n)
//Space Complexity: O(1)

function segregateEvenOdd(arr) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        while (arr[left] == 0 && left < right) {
            left++;
        }
        while (arr[right] == 1 && left < right) {
            right--;
        }

        if (left < right) {
            arr[left] = 0
            arr[right] = 1;
            left++;
            right--;
        }
    }
}

