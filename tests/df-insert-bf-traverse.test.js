const {expect, test} = require("@jest/globals");
const {breadthFirstTraverse, depthFirstInsert, createNode} = require("../src/df-insert-bf-traverse");

const insertWithString = (str, root = createNode("8")) => {
  str.split("").forEach((c) => depthFirstInsert(root, c));
  return root;
};

const testCases = [
  ['06f973d4c2ae1b5', '80f6937d24ce15ab'],
  ['58c62a3fb14e0d', '85c26af13be04d'],
  ['e390d684fc25a7', '83e069f247d5ca'],
  ['ba98c2d340615e7', '82b03ac149d6e57'],
  ['42e89ab67150d', '84e269157a0bd'],
  ['eb690d81af3725', '86e07bf19d3a25'],
  ['1cd6ef942b573a', '81c69d47be25af3'],
  ['45a70e6c93bd821', '84a059e37c26bd1'],
  ['b8037af951e2cd4', '80b3af179e25c4d'],
  ['43967afbc1508', '84936a157f0bc']
];

for (let i = 0; i < testCases.length; i++) {
  let [str, traversedExpected] = testCases[i];

  test(`Insert "${str}", Traverse should be: "${traversedExpected}"`, () => {
    let root = insertWithString(str, createNode("8"));
    let traversed = breadthFirstTraverse(root).join("")
    expect(traversed).toEqual(traversedExpected);
  })
}
