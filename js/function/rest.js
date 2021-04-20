function sum(...args) {
  let sum = 0;
  args.forEach(item => {
    sum += item;
  });
  return sum;
}

console.log(sum(9, 8, 7));

function foo(a, b, ...rest){}
console.log(foo.length);

function bar(a=2, b, c) {}
console.log(bar.length)
