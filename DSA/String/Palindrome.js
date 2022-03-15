//1. Brute Force: Using Nested Loops

//Time Complexity: O(n)
//Auxiliary Space: O(1)

function checkPalindrome(str){
    let N = str.length;
    let newStr = "";
    let oldStr = "";
    for (let i = 0; i < N; i++) {
        oldStr += str[i];
    }
    for (let i = N - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (oldStr == newStr) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


//Time Complexity: O(n)
//Auxiliary Space: O(1)

function checkPalindrome(str){
    str = str.split("");
    let l=0,r=str.length-1;

    while(l<r){
        if(str[l] != str[r]){
            return false
        }
        l++;
        r--;
    }
    return true;
}
