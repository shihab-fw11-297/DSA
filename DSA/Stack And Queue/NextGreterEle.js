// Brute Force

//T.C = O(n^2)
//S.C = O(n)


function prevSmall(arr){
    let n = arr.length, s="";
    for(let i=1; i < n; i++){
        for(let j=i-1; i >=0; i--){
            if(arr[j] < arr[i]){
                s+= arr[i] + " "
                break;
            }
        }
    }
    return s;
}


// Stack

//T.C = O(n)
//S.C = O(n)

function prevSmall(arr){
    let s=[], res;
    for(let i=0; i< n; i++){
        while(s.length!==0 && s[s.length-1]<=arr[i]){
            s.pop();
        }

        if(s.length == 0){
            res += -1;
        }
        else{
            res+= s[s.length-1];
        }
        s.push(arr[i]);
    }
}