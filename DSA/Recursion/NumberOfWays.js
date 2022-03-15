function NumberOfWays(num) {

    if (num == 1 || num == 0) {
        return 1;
    }else if (num == 2) {
        return 2;
    }else if(num==3){
        return 4;
    }
    else {
        let ans = NumberOfWays(num - 3) + NumberOfWays(num - 2) + NumberOfWays(num - 1);
        return ans;
    }
}