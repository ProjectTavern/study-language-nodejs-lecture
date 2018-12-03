/**
 * 별찍기
 * *
 * **
 * ***
 * ****
 * *****
 * */

for (let index = 0; index < 5; index++) {

  let string = '';

  for (let jndex = 0; jndex <= index; jndex++) {
    string += '*';
  }

  console.log(string);
}
