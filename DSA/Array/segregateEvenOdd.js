// check from left is it even or not and check from right and if is it not than swap it

//Time Complexity: O(n)
//Space Complexity: O(1)
function segregateEvenOdd(arr) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        /* Increment left index while we see 0 at left */
        while (arr[left] % 2 == 0 && left < right)
            left++;

        /* Decrement right index while we see 1 at right */
        while (arr[right] % 2 == 1 && left < right)
            right--;

        if (left < right) {
            /* Swap arr[left] and arr[right]*/
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}