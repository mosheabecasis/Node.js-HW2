const EventEmitter = require('events');
const log_emitter = new EventEmitter();

log_emitter.on('logging', (message) => {
    console.log(`Logging: ${message}`);
})
module.exports.log_emitter = log_emitter;





// function log(message) {
//     console.log(`Logging: ${message}`)
// }

// // console.log(module)

// module.exports.log = log;