function reverse(arr,k){
    let n = arr.length;
    arr.sort((a,b) => a - b);   //O(N log N)
    return arr[k - 1];
}

function runProgram(input) {
    let Input = input.split("\n");
    let NandK = Input[0].trim().split(" ").map(Number);
    let k = NandK[1]
    let arr = Input[1].trim().split(" ").map(Number);
    let ans = reverse(arr,k);
    console.log(ans);
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`6 5
7 10 4 3 20 15`);
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