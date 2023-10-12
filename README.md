# Recursion Homework: Depth and Breadth First Searches

## This repo has:

1. A recursive function, `depthFirstInsert`, that uses a depth-first approach to tree insertion.
2. An imperative function, `breadthFirstTraverse`, that uses a breadth-first approach to tree traversal.
3. Tests for verifying the output of both functions.

## What does the code do?

1. `depthFirstInsert` function takes a `root` node and a `value`, and inserts the `value` into a binary tree starting at the `root`. Each `value` is a digit. To limit scope, but to also make things interesting, I chose hexadecimal digits as the set of "values" to use. All the values you will encounter in the sample code will be part of the set {0123456789abcdef}. However, if you test your code against any value that respects the Javascript comparator `<`, you can insert them in the tree. If you were to insert the elements from this array `['a', 5, 'test']` into the tree, it should still work.
2. `breadthFirstTraverse` takes a root node, and traverses the entire tree in a breadth-first approach. This is simpler to understand and implement.
3. `df-insert-bf-traverse.test.js` adds tests for the above two functions.

## Your task
1. Write recursive function `depthFirstInsert`, in an iterative/imperative fashion.
2. Write the iterative function, `breadthFirstTraverse`, in a recursive fashion.
