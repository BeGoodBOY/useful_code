// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

function foo() {
  setTimeout(function () {
    console.log(this.name)
  }, 0);
}
foo.call({name: 'foo'}); //undefined

function bar() {
  setTimeout(()=>{
    console.log(this.name);
  }, 0);
}

bar.call({name: 'bar'}) // bar

let ob = {
  name: 'ob',
  getName() {
    console.log('ob.getName: ' + this.name);
  },
  getNameArrow: ()=>{
    console.log('ob.getNameArrow: ' + this.name);
  }
}

ob.getName(); // ob
ob.getNameArrow(); // undefined

name ="global";
let wrap0 = {
  name: 'wrap0',
  getName() {
    return () => {
      return this.name
    }
  },
  wrap1: {
    name: 'wrap1',
    getName: () =>{
      return this.name;
    },
    getNameArrow(){
      return () => this.name
    }
  }
};
console.log('wrap0.getName: ' + wrap0.getName()()) //0
console.log('wrap1.getName: ' + wrap0.wrap1.getName()); //undefined
console.log('wrap1.getNameArrow: ' + wrap0.wrap1.getNameArrow()()); //wrap1


