const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('success');
  } else {
    reject('failed');
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
