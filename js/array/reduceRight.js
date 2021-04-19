const arr = [1, 2, 3, 4];
const res = arr.reduceRight((pre, curr, index) => {
  console.log('index: '+ index);
  console.log('pre: ' + pre);
  console.log('curr: ' + curr);
  return pre - curr;
});

console.log(res);
