function searchArr(arr, low, high, key){
    if(low<=high){
        let mid = low + Math.floor(high - low / 2);
        
        if(arr[mid] == key){
            return 1;
        }
        else if(arr[mid] < key){
            return searchArr(arr,mid + 1, high , key)
        }
        else{
            return searchArr(arr, low, mid - 1, key)
        }
    }
    else {
        return -1;
    }
}
