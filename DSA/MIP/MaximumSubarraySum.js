//Largest Sum Contiguous Subarray
//O(n^3)
// function check(arr) {
//     let n = arr.length, max = 0;
//     for (let i = 0; i < n; i++)
//         for (let j = i; j < n - 1; j++) {
//             let sum = 0;
//             for (let k = i; k <= j; k++)
//                 sum += arr[k];
//             if (sum > max)
//                 max = sum;
//         }
//     return max;
// }

//Time Complexity: O(n^2) (Why?)
//Space Complexity: O(1)

// function check(arr) {
//     let n = arr.length, maxSum = 0;
//     for (let i = 0; i < n - 1; i++) {
//         let sum = 0;
//         for (let j = i; j < n - 1; j++) {
//             sum = sum + arr[j]
//             if (sum > maxSum)
//                 maxSum = sum
//         }
//     }
//     return maxSum
// }

//Time Complexity: O(n)
//Auxiliary Space: O(1)

function check(arr) {
    let n = arr.length, Cursum = 0, sum = 0;
    for (let i = 0; i < n-1; i++) {
        Cursum = Cursum + arr[i];
        if (Cursum > sum) {
            sum = Cursum
        }
        if (Cursum < 0) {
            Cursum = 0;
        }
    }
    return sum;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(check(arr));
}

//-2, -3, 4, -1, -2, 1, 5, -3 
if (process.env.USERNAME === "Shihab") {
    runProgram(`9
2 3 4 5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}