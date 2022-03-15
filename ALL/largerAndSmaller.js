function runProgram(input) {
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);
    let small=arr[0],large=arr[0];
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i]
        }
        else if(arr[i]>large){
            large=arr[i]
        }
    }
    console.log(small,large);
}


if (process.env.USERNAME === "Shihab") {
    runProgram(`4
1 2 3 4 5`);
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