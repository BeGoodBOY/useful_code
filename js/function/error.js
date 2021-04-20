// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

function throwError(val) {
  throw new Error(val);  
}

function foo(para = throwError('no para')) {
  return para;
}

foo(1);
console.log('foo with para');
foo(); //Uncaught Error: no para
console.log('foo without para');
