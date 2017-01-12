function bubbleSort(arr){
    
    for(var i=0;i<arr.length;i++){
      arr.slice(0, -i).forEach(function(element,i){
        if(element > arr[i + 1]){
            swap(arr,i);
        }
    });
    }
    return arr;
     
}
    
function swap(arr,i){
    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
    
}
