function runProgram(input){
    var newInput = input.split(/[\r\n]+/);
    var l = Number(newInput[0]);
    var queue = [];

    for (var a = 1; a <= l; a++) {
        var arr = newInput[a].split(" ");
        var res = "";
 
        if (arr[0] == "E") {
            queue.push(arr[1])
            console.log(queue.length)
        }
        if (arr[0] == "D") {

            if (queue.length > 0) {
                var left = queue[0];
                queue.shift()
                res = left + " " + queue.length
                console.log(res);
            }
            else {
                res = "-1" + " " + queue.length
                console.log(res)
            }
        }
    }
}