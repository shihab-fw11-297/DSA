//1. Brute Force: Using Nested Loops

//Time Complexity : O(n2) 
//Auxiliary Space : O(1) 

function removeDuplicate(str, n)
{
    var index = 0;
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j < i; j++) 
        {
            if (str[i] == str[j])
            {
                break;
            }
        }
        if (j == i) 
        {
            str[index++] = str[i];
        }
    }
    return str.join("").slice(str, index);
}

//2. Set approch/hasmap approch

//Time Complexity: O(n)
//Auxiliary Space : O(1) 

function removeDuplicates(str) {
    var lhs = new Set();
    for (var i = 0; i < str.length; i++)
        lhs.add(str[i]);

    for (var ch of lhs)
        console.log(ch);
}


var str = "geeksforgeeks";
removeDuplicates(str);