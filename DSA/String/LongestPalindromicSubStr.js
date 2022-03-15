
//1. Brute Force: Using Nested Loops fids sub string and check longest ppalindrome

//Time Complexity: n*O(n) = O(n²)
//Space Complexity: O(1)

function substring(data){
    var temp = 0;
    for (var i = 0; i < data.length; i++) {
        var substr = "";
        for (var j = i; j < data.length; j++) {
            substr += data[j];
            var result = palindrome(substr);
            if (result == true) {
                if (substr.length > temp) {
                    temp = substr.length
                   
                }
            }
        }
    }
    console.log(temp)
}

function palindrome(data) {
    var result = true;
    for (var i = 0; i < data.length; i++) {
        if (data[i] != data[data.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}