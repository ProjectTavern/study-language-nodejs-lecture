setImmediate(() => {
  console.log('immediate');
});
Promise.resolve().then(() => console.log('fast promise'));
process.nextTick(() => {
  console.log('nextTick');
});
new Promise((rs) => rs()).then(() => console.log('defined promise'));
Promise.resolve().then(() => console.log('promise'));
setTimeout(() => {
  console.log('timeout 1');
}, 1);
setTimeout(() => {
  console.log('timeout');
}, 0);
setImmediate(() => {
  console.log('lazy immediate');
});
Promise.resolve().then(() => console.log('last promise'));

