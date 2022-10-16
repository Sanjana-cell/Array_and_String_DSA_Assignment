var arr=[1,2,4,3,2,4,2,5,7,2,3,3,3,3,3];
sorted_array=arr.sort();
let max_count = 1;
let highFreq = arr[0];
let curr_count = 1;
for(let i=0; i<sorted_array.length; i++){
    if(arr[i] == arr[i+1]){
        curr_count++;
    }else{
        curr_count = 1;
    }
    if(curr_count>max_count){
        max_count = curr_count;
        highFreq=arr[i+1];
    }
}
console.log(highFreq)