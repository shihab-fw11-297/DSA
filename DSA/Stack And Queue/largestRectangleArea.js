// using brute force

//T.C = O(n^2)
//S.C = O(1)

function findLargestArea(arr,n){
    for(let i = 0; i < n; i++)
    {
        let left = i;
        let right = i;

        while(arr[left] >= arr[i]){     //left small index
            left--;
        }

        while(arr[right] >= arr[i]){    //right small index
            right++;
        }

        area = (right - left - 1) * arr[i];
    }
    return area;
}

// using Stacks

//T.C = O(n)
//S.C = O(n)

function largestRectangleArea(height) {
    if (height == null || height.length == 0) {
        return 0;
    }
 
    var stack = [];
 
    var max = 0;
    var i = 0;
 
    while (i < height.length) {
        //push index to stack when the current height is larger than the previous one
        if (stack.length == 0 || height[i] >= height[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
        //calculate max value when the current height is less than the previous one
            var p = stack.pop();
            var h = height[p];
            var w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(h * w, max);
        }
 
    }
 
    while (stack.length!=0) {
        var p = stack.pop();
        var h = height[p];
        var w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(h * w, max);
    }
 
    return max;
}