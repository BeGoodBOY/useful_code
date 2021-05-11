function traversal(node) {
  if(!node) return;
  let nodes = [];
  let stack = []; //利用栈
  stack.push(node);
  while(stack.length>0) {
    let item = stack.shift();
    nodes.push(item);
    let children = item.children;
    for(let i=0; i<children.length; i++) {
      stack.push(children[i]);
    }
  }
  return nodes;
}