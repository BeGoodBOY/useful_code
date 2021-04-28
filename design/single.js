/*
** 单例代理模式
*/
const proxySingleton = function(fn) {
  var instance;
  return function() {
      if(!instance) {
          instance = fn.apply(this, arguments)
      }
      return instance;
  }
}

function createLayer(html) {
  let el = document.createElement('div');
  el.innerHTML = html;
  el.id = 'layer';
  return el;
}

let singleC = proxySingleton(createLayer);
let c1 = singleC('<span>2</span>');
let c2 = singleC('<span>65</span>');
console.log(c1); //<div id="layer"><span>2</span></div>
console.log(c2); //<div id="layer"><span>2</span></div>


/*
** 单例模式
*/

function single(Fn) {
  var ob = null;
  return function(...args) {
    return ob || (ob = new Fn(...args));
  }
}

function Person(opts, energy='a little') {
  this.name = opts.name;
  this.age = opts.age
  this.energy = energy
}

const getSinglePerson = single(Person);

let p1 = getSinglePerson({name: 'libo', age: 18}, 'huge');
let p2 = getSinglePerson({name: 'ljjj', age: 111});

console.log(p1); //Person { name: 'libo', age: 18, energy: 'huge' }
console.log(p2); //Person { name: 'libo', age: 18, energy: 'huge' }


