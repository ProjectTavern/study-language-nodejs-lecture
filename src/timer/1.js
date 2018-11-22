const timeout = setTimeout(() => console.log('1.5초 후 실행'), 1500);
const interval = setInterval(() => console.log('1초마다 실행'), 1000);
const clearTimeoutBeta = setTimeout(() => console.log('실행되지 않음'), 2000);
setTimeout(() => clearTimeout(clearTimeoutBeta));
const immediate = setImmediate(() => console.log('즉시 실행'));
const clearImmediateBeta = setImmediate(() => console.log('실행되지 않음'));
clearImmediate(clearImmediateBeta);
