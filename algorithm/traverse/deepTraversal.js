function deepTraversal(node, nodeList=[]) {
  if(!node) return;
  nodeList.push(node);
  let childs = node.children;
  for(var i=0; i<childs.length; i++) {
    deepTraversal(childs[i], nodeList);
  }
  return nodeList;
}

function deepTraversal1(node) {
  if(!node) return;
  let nodeList = [];
  nodeList.push(node);
  let childs = node.children;
  for(let i=0; i<childs.length;i ++) {
    nodeList = [...nodeList, ...deepTraversal1(childs[i])];
    // nodeList = nodeList.concat(deepTraversal1(childs[i]));
  }
  return nodeList;
}

console.log(deepTraversal1(document.querySelector('#root')))





