function FactorialRecursion(num) {
    if (num == 1) {
        return 1;
    } else {
        let res = num * FactorialRecursion(num - 1);
        return res;
    }
 }