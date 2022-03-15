//1. Brute Force: Using  Loops

//Time Complexity: O(n)
//Space Complexity: O(1)


function count(str){
    let cnt=1;
    let first=str[0];
    let res="";

    for(let i=1; i<=str.length; i++){
        if(str[i]==first){
            cnt++;
        }
        else{
            res += str[i - 1] + cnt;
            first = str[i];
            cnt=1;
        }
    }
    console.log(res);
}