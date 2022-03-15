//1. Using 1 Loops

//Time Complexity: O(n)
//Auxiliary Space: O(n)

function reverse(str) {
    let s = "";

    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}


//2. 2pointer + swap

//Time Complexity: O(n)
//Auxiliary Space: O(1)

function reverse(str) {
    str = str.split("");
    let l = 0, r = str.length - 1;

    while (l < r) {
        let temp = str[l]
        str[l] = str[r]
        str[r] = temp
        l++;
        r--;
    }
    return str.join('');
}

let strs = "stark"
console.log(reverse(strs));

