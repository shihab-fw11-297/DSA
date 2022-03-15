function problem(expr) {

    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check;

        switch (x) {
            case ')':
                check = stack.pop();
              
                if (check == '{' || check == '[')
                    return false;
                break;
            
            case '}':
                check = stack.pop();
              
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
               
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {
        var data = input[i];
        if (problem(data) == true) {
            console.log("balanced");
        } else {
            console.log("not balanced");
        }

    }

}

if (process.env.USERNAME === "Shihab") {
    runProgram(`1
{([])}`);
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