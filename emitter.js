const EventEmitter = require('events');
const emptyArray_emitter = new EventEmitter();

emptyArray_emitter.on('empty_array', () => {
    console.error('The Array Is Empty!');
})
module.exports.emptyArray_emitter = emptyArray_emitter;
