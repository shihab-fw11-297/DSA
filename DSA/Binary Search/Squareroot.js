function SquareRoot(num) {

    if (num == 0 || num == 1) {
        return num;
    }
    let low = 1;
    let high = num;
    let res;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (mid * mid == num) {
            return mid;
        }
        if (mid * mid < num) {
            low = mid + 1;
            res = mid;
        }
        else {
            high = mid - 1;
        }
    }
    return res;
}