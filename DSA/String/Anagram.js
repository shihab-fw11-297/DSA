//1. Brute Force: Using Nested Loops

//Time Complexity: n*O(n) = O(n²)
//Space Complexity: O(1)


function checkAnagram(arr1, arr2) {
    var res = false;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j] && arr2.length == arr1.length) {
                res = true;
            }
            else {
                res = false;
            }
        }
    }
    if (res == true) {
        console.log('True');
    } else {
        console.log('False');
    }
}


//2. Using Sorting

//Time Complexity : O(nlogn)
//Space Complexity : O(1).

function checkAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;

    if (n1 != n2)
        return false;

    str1.sort();
    str2.sort()
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}

//Using Hashing
//Time Complexity : O(n)
//Space Complexity : O(n).

function isAnagram(str1, str2) {
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();

    if (str1 === str2)
        return true;

    var dict = {};

    for (var i = 0; i < str1.length; i++) {
        if (dict[str1[i]])
            dict[str1[i]] = dict[str1[i]] + 1;
        else
            dict[str1[i]] = 1;
    }

    for (var j = 0; j < str2.length; j++) {
        if (dict[str2[j]])
            dict[str2[j]] = dict[str2[j]] - 1;
        else
            dict[str2[j]] = 1;
    }

    for (var key in dict) {
        if (dict[key] !== 0)
            return false;
    }

    return true;
}
