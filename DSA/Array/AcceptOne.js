//first we can compare every element and check it occure 2 times then we can ignore other wise we canprint

//T.C = O(n^2)
//S.C = O(1)

function accept(arr) {
    let s = "", n = arr.length;

    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                cnt++;
            }
        }
        if (cnt == 1) {
            s += arr[i];
        }
    }
    return s;
}

//--------------------------------------------------------------------------------------------

//Sorting Approch

//T.C = Onlogn
//S.C = O(1)

function accept(arr) {
    arr.sort((a, b) => { return a - b });
    let ans = -1, n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] != arr[i + 1]) {
            ans = arr[i];
            break;
        }
    }

    if (arr[n - 2] != arr[n - 1]) {
        ans = arr[n - 1];
    }
    return ans;
}

//--------------------------------------------------------------------------------------------

//hashmap Approch

//T.C = O(n)
//S.C = O(n)

function check(arr){
    let obj={}
    for(let i=0; i<arr.length; i++){
        let key = arr[i];
        if(obj[key]==undefined){
            obj[key] = 1;
        }
        else{
            let prevObj = obj[key];
            obj[key] = prevObj + 1;
        }
    }
    let s = "";
    for (key in obj){
        if(obj[key]==1){
            s+= key + " ";
        }
    }
    return s;
}

//--------------------------------------------------------------------------------------------

//XOR Approch

//T.C = O(n)
//S.C = O(1)

function search(arr)
{
    let XOR = 0,n=arr.length;;
    for (let i = 0; i < n; i++) {
        XOR = XOR ^ arr[i];
    }
    console.log("The required element is " + XOR );
}
