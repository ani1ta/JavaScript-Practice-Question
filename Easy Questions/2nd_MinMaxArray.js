function MinMax(arr){
    let a = []
    if(arr.length === 1){
        a.push(Math.min(...arr))
    }
    else{
        a.push(Math.max(...arr))
        a.push(Math.min(...arr))
    }

    return a
}

console.log(MinMax([9, 4, 8]))
console.log(MinMax([1]))
console.log(MinMax([9, 4, 8,5 , 3, 2, 89, 78]))