
// Iterative Solution

function fibs(number){
    const FibArray = [0, 1];

    if(number == 1) {
        return [0]
    }

    for(let num = number; num > 2; num--){
        FibArray.push((FibArray.at(-1) + FibArray.at(-2)));
    }

    return FibArray;
}

// Recursive Solution

function fibsRec(number){

    if (number == 1) {
        return [0]
    }else if (number == 2){
        return [0, 1]
    }

    const FibArray = fibsRec(number - 1);
    FibArray.push(FibArray[FibArray.length - 1] + FibArray[FibArray.length - 2]);
    return FibArray
}

console.log(fibs(7));
console.log(fibsRec(7));