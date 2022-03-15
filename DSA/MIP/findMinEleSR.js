function findMin(arr) 
{ 
    let low=0, high = arr.length-1;

    while(low < high)
    {
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] == arr[high])
            high--;
        else if(arr[mid] > arr[high])
            low = mid + 1;
        else
            high = mid;
    }
    return arr[high];
} 


function runProgram(input) {

    var Data = input.split("\n");
    let NandK = Data[0].split(" ").map(Number);
    let arr = Data[1].trim().split(" ").map(Number);

    let ans = findMin(arr);
        console.log(ans);
}


if (process.env.USERNAME === "Shihab") {
    runProgram(`5
8 4 10 9 11`);
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