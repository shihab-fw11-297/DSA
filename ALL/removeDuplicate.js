//Time Complexity: O(NlogN)
//Auxiliary Space: O(N)

function duplicate(arr){
  let n = arr.length,i=0,ans="",j = 0;
  arr.sort((a,b) =>{return a - b});
  while (i < n)
  {
     ans += arr[i] + " ";
      while (arr[i] == arr[i+1])
          i = i + 1
        i = i + 1
  }
  return ans;
}

let arr = [ 2, 3, 1, 9, 3, 1, 3, 9];
let miss = duplicate(arr);
console.log(miss);