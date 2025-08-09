let arr = [23, 425, 245, 425, 1234, 134, 352345, 4571234];
let large = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        large = arr[i+1];
    }
}
console.log(large);