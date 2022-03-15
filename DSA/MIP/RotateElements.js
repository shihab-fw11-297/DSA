function rotate(arr,n){
    var top=0,bottom=n-1,left=0,right=n-1;

    for(var i=0; i<Math.floor(n/2);i++){
        var prev = arr[top+1][left];
        for(var j=left; j<=right; j++){
            var temp = arr[top][j];
            arr[top][j] = prev;
            prev = temp;
        }
        top++;

        for(var j = top; j<=bottom; j++){
            temp = arr[j][right];
            arr[j][right] = prev;
            prev = temp;
        }
        right--;

        for(var j = right; j>=left; j--){
            temp = arr[bottom][j];
            arr[bottom][j] = prev;
            prev = temp;
        }
        bottom--;

        for(var j = bottom; j>=top; j--){
            temp = arr[j][left];
            arr[j][left] = prev;
            prev = temp;
        }
        left++;
    }
    return arr;
}

function runProgram(input){
    var data = input.split("\n");
    var length=+data[0];
        var arr=[];
        for(var k=1; k<=length; k++){
            arr.push(data[k].trim().split(" ").map(Number));
        }
      var newmat = rotate(arr,length);

      for(var i=0; i<newmat.length;i++){
          console.log(newmat[i].join(" "));
      }
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`4\n1 2 3 4\n1 2 3 4\n1 2 3 4\n1 2 3 4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
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