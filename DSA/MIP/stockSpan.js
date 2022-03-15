//Time Complexity = O(n²)
//Space Complexity: O(n)

function stockSpan(arr) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        var flag = true;
        var count = 0;
        for (var j = i; j >= 0; j--) {
            if (arr[j] <= arr[i]) {
                count++;
            }
            else {
                flag = false;
                break;
            }
        }
        if (!flag || j <= 0)
            result.push(count);
    }
    return result;
}

//Time Complexity = O(n)
//Space Complexity: O(n)


function stockSpan(arr){
    let s=[],v=[];
    s.push(0);
     for(let i=0; i<arr.length;i++){
         while(s.length!=0 & arr[i]>=arr[s[s.length-1]]){
             s.pop();
         }
         if(s.length==0){
             v[i] = i+1;
         }
         else{
             v[i]=i-s[s.length-1];
         }
         s.push(i)
    }
   return v.join(" ");
 }

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));