function longestUniqueSubsttr(str) {
    var n = str.length;
    var res = 0;

    for (var i = 0; i < n; i++) {
        var visited = new Array(256);

        for (var j = i; j < n; j++) {
            if (visited[str.charCodeAt(j)] == true)
                break;

            else {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}

var str = "geeksforgeeks";
var len = longestUniqueSubsttr(str);
console.log("The length of the longest " +
    "non-repeating character " +
    "substring is " + len);