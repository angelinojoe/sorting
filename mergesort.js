function split(array){
    var index = Math.floor(array.length / 2);
    return [array.slice(0,index),array.slice(index)];
}

function mergeSort(array){
    var sorted = [];
    for(var i=0;i<aray.length;i++){
        if(array[i].length > 1){
            result = (split(array));
            sorted.concat(result[0].concat(result[1]))
        }
    }
    return sorted;
}
