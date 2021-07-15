const statistics = require('./statistics');

let array = ['A', '2' , '3' , 'C', '5', 'F'];
let empty = [];


function checkArray(arr){
    let arrayLength = statistics.getLength(arr);
    console.log(arrayLength);

    let arrayFirst = statistics.getFirst(arr);
    console.log(arrayFirst);

    let arrayLast = statistics.getLast(arr);
    console.log(arrayLast);

}

checkArray(array);
checkArray(empty);

// let arrayLength = statistics.getLength(array);
// console.log(arrayLength);
// let arrayFirst = statistics.getFirst(array);
// console.log(arrayFirst);
// let arrayLast = statistics.getLast(array);
// console.log(arrayLast);


// result = statistics.getLength(empty);
// result = statistics.getFirst(empty);
// result = statistics.getLast(empty);
