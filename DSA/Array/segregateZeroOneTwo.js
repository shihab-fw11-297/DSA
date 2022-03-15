//Sorting approch

//onlog(n)

arr.sort((a, b) => { return a - b })

//--------------------------------------------------------------------------------------------

//Counting Approch

//Time Complexity : O(n) 
//Space Complexity : O(1) 

function segregate0and1(arr, n) {
    let countZero = 0, countOne = 0, countTwo = 0;;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 0)
            countZero++;

        if (arr[i] == 1)
            countOne++;

        if (arr[i] == 2)
            countTwo++;
    }

    for (let i = 0; i < countZero; i++)
        arr[i] = 0;

    for (let i = countZero; i < countOne; i++)
        arr[i] = 1;

    for (let i = countOne; i < countTwo; i++)
        arr[i] = 2;

    console.log(arr.join(" "));
}

//--------------------------------------------------------------------------------------------

//DUTCH Approch

//Time Complexity : O(n) 
//Space Complexity : O(1) 

function sort012(arr)
{
    var low = 0, high = arr.length - 1, mid = 0, temp =0;

    while(mid<=high){
        switch(arr[mid]){
            case 0:{
                temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
                break;
            }

            case 1:{
                mid++;
                break;
            }

            case 2:{
                temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;

                high--;
                break;
            }
        }
    }
}
function printArray(arr,arr_size)
{
    let i,s=""
    for (i = 0; i < arr_size; i++)
    {
       s+=arr[i] + " ";
    }
    console.log(s);
}