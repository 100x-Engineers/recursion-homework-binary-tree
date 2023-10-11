const createNode = (value) => {
  return {
    value: value,
    left: null,
    right: null,
  }
}

const depthFirstInsert = (root, value) => {
  if (root.value === value || !value)
    return root;

  // insert on the left side of the tree
  if (value < root.value) {
    if (root.left) {
      return depthFirstInsert(root.left, value);
    } else {
      root.left = createNode(value);
      return root;
    }
  }

  // insert on the right side of the tree
  if (root.value < value) {
    if (root.right) {
      return depthFirstInsert(root.right, value);
    } else {
      root.right = createNode(value);
      return root;
    }
  }
}

const breadthFirstTraverse = (root) => {
  let collector = [];
  let q = [root]

  while (q.length > 0) {
    let first = q.shift();
    collector.push(first.value);
    if (first.left)
      q.push(first.left);

    if (first.right)
      q.push(first.right);
  }

  return collector;
};

module.exports = {depthFirstInsert, breadthFirstTraverse, createNode};
