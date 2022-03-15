//first we can loop through till rotate index and push it in stack and thand add it remaining element
//BRUTE FORCE
//T.C = O(n^2)
//S.C = O(1)

function rotate(arr, d, n) {
    let temp = [], arrs = [];

    for (let i = 0; i < d; i++) {
        temp.push(arr[i]);
    }

    for (let i = d; i < n; i++) {
        arrs.push(arr[i]);
    }
    console.log(arrs.join(" ") + temp.join(" "));
}


//2pointer + swap

//Time complexity : O(n) and O(1)
//revese arr (arr, 0, d-1)
//revese arr (arr, d, n-1)
//revese arr (arr, 0, n-1)


//modulo operaator approch
//Time complexity : O(n) and O(n)

function rotate(arr, k) {
    let n = arr.length,s=[];
    let mod = k % n;
    
    for(let i=0; i<n; i++){
        s.push(arr[(mod+i)%n])
    }
    return s.join(" ")
}

