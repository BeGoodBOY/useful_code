var data = {
  bar: 10
};
let o = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: true,
    value: 'It is foo'
  },
  bar: {
    configurable: false,
    get() {
      return data.bar
    },
    set(value) {
      data.bar = value;
      console.log(`bar changed to: ${value}`)
    }
  }
})