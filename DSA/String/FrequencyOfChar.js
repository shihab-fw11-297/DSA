//1. hasmap approch

//Time Complexity: O(n)
//Auxiliary Space : O(n) 


function Frequency(str){
    let obj={}

    for(let i = 0; i < str.length; i++){
        let key = str[i];
        if(obj[key]==undefined){
            obj[key] = 1;
        }
        else{
            let prevObj = obj[key];
            obj[key] = prevObj + 1;
        }
    }

    for(key in obj){
        console.log(key + '-' + obj[key]);
    }
}
