//Time complexity : O(n) 
//Auxiliary Space : O(d)
// function rotate(arr,d,n){
//     let temp=[],arrs=[];
    
//     for(let i=0; i< d; i++){
//         temp.push(arr[i]);
//     }

//     for(let i=d; i<n ;i++){
//         arrs.push(arr[i]);
//     }
// console.log(arrs.join(" ") + temp.join(" "));
// }

//Time complexity : O(n) and O(1)
//revese arr (arr, 0, d-1)
//revese arr (arr, d, n-1)
//revese arr (arr, 0, n-1)
//2pointer + swap

//Time complexity : O(n) and O(n)
function rotate(arr, k) {
    let n = arr.length,s=[];
    let mod = k % n;
    
    for(let i=0; i<n; i++){
        s.push(arr[(mod+i)%n])
    }
    return s.join(" ")
}

var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let ans = rotate(arr, 2, 7);

console.log(ans);