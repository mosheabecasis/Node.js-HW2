
const emitter = require('./Emitter');
const logger = require('./logger');

function getLength(array){
    if(array.length === 0){
        emitter.emptyArray_emitter.emit('empty_array');
    }else{
        length = array.length;
        //logger.log(`the length of the array is: ${length}`);
        logger.log_emitter.emit(`the length of the array is: ${length}`);
        return length;
    } 
    
}

function getFirst(array){
    if (array.length === 0) {
        emitter.emptyArray_emitter.emit('empty_array');
    } else {
       first = array[0];
       //logger.log(`the first item of the array is: ${first}`);
        logger.log_emitter.emit(`the first item of the array is: ${first}`);
       return first;
    }
    
}

function getLast(array){
    if (array.length === 0) {
        emitter.emptyArray_emitter.emit('empty_array');
    } else {
        last = array[array.length - 1];
        //logger.log(`the last item of the array is: ${last}`);
        logger.log_emitter.emit(`the last item of the array is: ${last}`);
        return last;
    }
    
}

module.exports.getLength = getLength;
module.exports.getFirst = getFirst;
module.exports.getLast = getLast;
