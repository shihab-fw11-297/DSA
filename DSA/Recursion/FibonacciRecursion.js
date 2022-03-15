
function FibonacciRecursion(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else if (n > 1) {
        let sum = FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);
        return sum;
    }
}