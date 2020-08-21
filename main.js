// part1
function replaceWith(str, l, lreplace) {
    return str.split(l).join(lreplace);
}

// part2

function expand(arr, num){
    let newArr = [];
    for (let i=0; i< num; i++){
        newArr = newArr.concat(arr)
    }
    return newArr;
}

// part3
function acceptNumbersOnly(){
    for(var i=0; i<arguments.length; i++){
        if(arguments[i] === NaN){
                return false;
        }
        if(arguments[i] !== Number(arguments[i])){
            return false;
        };
    }
    return true;
}

// part4

function mergeArrays(arr1, arr2){
let newArr = arr1.concat(arr2).sort()
return newArr;
}

// part5

function mergeObjects(obj1, obj2){
for(var key in obj2){
    obj1[key]= obj2[key]
}
return obj1;
}