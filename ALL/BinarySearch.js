function searchArr(arr, k) {
    if (arr.length === 0) {
        return -1;
    }

    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] == k) {
            return mid;
        }

        if (arr[mid] < k) {
            lo = mid + 1;
        }
        else if (arr[mid] > k) {
            hi = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};


function runProgram(input) {

    var Data = input.split("\n");
    let NandK = Data[0].split(" ").map(Number);
    let K = NandK[1];

    let arr = Data[1].trim().split(" ").map(Number);

    let ans = searchArr(arr, K);
    if (ans != -1) {
        console.log(1);
    } else {
        console.log(-1);
    }
}


if (process.env.USERNAME === "Shihab") {
    runProgram(`5 2
8 4 1 9 11`);
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