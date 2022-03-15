function check(arr,n,k){
    arr.sort((a,b)=>{ return a-b});

    let low = 0;
    let high = n - 1;
    let cnt=0;
    while (low < high)
    {
        if (arr[low] + arr[high] == k)
        {
          cnt++;
        }

        (arr[low] + arr[high] <k)? low++: high--;
    }
    return cnt;
}


let arr = [ 1, 5, 7, -1, 5 ];
let n = arr.length;
let sum = 50;

let ans = check(arr, n, sum)
if(ans==0){
    console.log('not found');
}
else{
    console.log(ans);
}