//Time Complexity: O(N)
//Auxiliary Space: O(N)

function duplicate(arr){
    let obj={}
    for(let i=0; i<arr.length; i++){
        let key = arr[i];
        if(obj[key]==undefined){
            obj[key] = 1;
        }
        else{
            let prevObj = obj[key];
            obj[key] = prevObj + 1;
        }
    }
    
    let cnt = "";
    for (key in obj){
        if(obj[key]>1){
            cnt+=key + " "
        }
    }
return cnt;
}

let arr = [  12, 11, 40, 12, 5, 6, 5, 12, 11  ];
let miss = duplicate(arr);
console.log(miss);