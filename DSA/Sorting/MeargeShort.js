
//Time Complexity: θ(nLogn)
//  Space: O(n)

function mergeSort(arr){
    let half = arr.length/2;

    if(arr.length < 2){ return arr}

    const left = arr.splice(0, half);
    return mearge(mergeSort(left), mergeSort(arr));
}

function mearge(left,right){
    let array=[];
    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
        }
        else {
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice())
}