function upperBound(arr, k){
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;   

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (k < arr[mid]) {
            ans = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return ans
}

function runProgram(input) {

    var newData = input.split("\n");
    let NandK = newData[0].split(" ").map(Number);

    let K = NandK[1];
    let arr = newData[1].trim().split(" ").map(Number);
    let ans = upperBound(arr, K);
    console.log(ans);

}

if (process.env.USERNAME === "Shihab") {
    runProgram(`6 3
2 3 3 3 6 9`);
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