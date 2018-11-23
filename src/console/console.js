console.time('시간');
console.log('기본 로그');
console.time('측정');
for (let i = 0; i < 100; i++) {
  continue;
}
console.timeEnd('측정');
console.timeEnd('시간');

function a() {
  b();
}

function b() {
  console.trace();
}

function c() {
  b();
}

a();
c();
