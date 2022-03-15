//(On)2
//(O)1
// function findLargestArea(arr){
//     let n=arr.length;

//     for(let i = 0; i < n; i++)
//     {
//         let left = i;
//         let right = i;

//         while(arr[left] >= arr[i]){     //left small index
//             left--;
//         }
//         while(arr[right] >= arr[i]){    //right small index
//             right++;
//         }
//         area = (right - left - 1) * arr[i];
//     }
//     return area;
// }

//Time Complexity: O(N)
//Space Complexity: O(N)

function findLargestArea(height) {
    if (height == null || height.length == 0) {
        return 0;
    }
    var stack = [],max = 0,i = 0;

    while (i < height.length) {
        //push index to stack when the current height is larger than the previous one
        if (stack.length == 0 || height[i] >= height[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
        //calculate max value when the current height is less than the previous one
            var p = stack.pop(),h = height[p],w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(h * w, max);
        }
    }
    while (stack.length!=0) {
        var p = stack.pop(),h = height[p],w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(h * w, max);
    }
    return max;
}
let hist = [5, 7, 12, 2, 9, 8];
let n = hist.length;
let largest = findLargestArea(hist,n);

console.log(largest);