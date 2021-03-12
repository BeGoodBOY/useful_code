// var element = {
//   tagName: 'ul',
//   props: {
//     id: 'list',
//     class: 'list'
//   },
//   children: [
//     {
//       tagName: 'li',
//       props: {
//         class: 'list-item'
//       },
//       children: [
//         'Item'
//       ]
//     },
//     {
//       tagName: 'li',
//       props: {
//         class: 'list-item'
//       },
//       children: [
//         'Item'
//       ]
//     }
//   ]
// }
// element 渲染结果：
// <ul id="list" class="list">
//     <li class="item">Item</li>
//     <li class="item">Item</li>
// </ul>

class Element {
  constructor(tagName, props, children) {
    if(!this instanceof Element) {
      return new Element(tagName, props, children);
    }
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  render() {
    let el = document.createElement(this.tagName),
        props = this.props;
    for(var propName in props) {
      el.setAttribute(propName, props[propName]);
    }
    this.children.forEach(child => {
      var childEl = (child.hasOwnProperty('tagName')) ? (new Element(child.tagName, child.props, child.children).render()) : document.createTextNode(child);
      console.log(childEl)
      el.appendChild(childEl);
    });
    return el;
  }
}

var ul = new Element('ul', {id: 'list'}, [
  {tagName:'li', props:{class:'item'}, children:['Item']},
  {tagName:'li', props:{class:'item'}, children:['Item']} 
]);

document.querySelector('#app').appendChild(ul.render());
