var sayNode = function () {
  console.log('Nodes');
};

var es = 'ES';
var oldObject = {
  sayJS: function () {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic';

const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};

