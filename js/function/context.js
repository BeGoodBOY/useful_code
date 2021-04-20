let x = 1;
function foo(x, y=function(){x=1000}) {
  x = 8;
  y();
  console.log(x);
}
foo(); // 1000
console.log(x); // 1


function bar(x, y=function(){x=10000}) {
  var x = 88;
  y();
  console.log(x);
}
bar(); // 88
console.log(x); //1