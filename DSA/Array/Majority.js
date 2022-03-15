//first we can compare every element and check max element occure and then check is it greterthan n/2 or not

//T.C = O(n^2)
//S.C = O(1)
function majority(arr) {
    let mCount = 0, index = -1, n = arr.length;

    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                cnt++;
            }
        }
        if (cnt > mCount) {
            mCount = cnt;
            index = i;
        }
    }
    if (mCount > n / 2) {
        console.log(arr[index])
    }
    else {
        console.log('not possible');
    }
}


//--------------------------------------------------------------------------------------------

//Sorting Approch

//T.C = Onlogn
//S.C = O(1)

function majority(arr) {
    arr.sort((a, b) => { return a - b })
    let index = -1, f = false, n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] == arr[i + Math.floor(n / 2)]) {
            index = i;
            f = true;
            break;
        }
    }
    if (f) {
        console.log(arr[index])
    }
    else {
        console.log('not possible');
    }
}

//--------------------------------------------------------------------------------------------

//hashmap Approch

//T.C = O(n)
//S.C = O(n)

function majority(arr) {
    let obj = {}, n = arr.length;
    for (let i = 0; i < n; i++) {
        let key = arr[i];
        if (obj[key] == undefined) {
            obj[key] = 1;
        }
        else {
            let prev = obj[key];
            obj[key] = prev + 1;
        }
    }
    for (key in obj) {
        if (Math.floor(n / 2) < obj[key]) {
            console.log(key);
        }
        else {
            console.log('not possible');
        }
    }
}