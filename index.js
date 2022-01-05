const tree = {
  root: {
    a: {
      m: {
        c: {
          x: {},
          y: {},
        },
      },
      n: {
        1: {},
        2: {
          AA: {},
          BB: {},
        },
      },
      o: {
        4: {},
        5: {},
      },
    },
    b: {
      S: {},
      T: {},
      U: {},
    },
    d: {
      E: {},
      F: {
        VV: {
          FT: {},
          AR: {},
        },
        NN: {},
      },
      g: {},
    },
  },
};

const findPath = (tree, target) => {
  let fullPath = [],
    done = false,
    path = {};

  const traverse = (tree, target, root) => {
    const keys = Object.keys(tree);
    keys.forEach((key) => {
      if (!done) {
        if (key === target) {
          path[root].push(target);
          fullPath = path[root];
          done = true;
          return;
        } else {
          var newRoot = tree[key];
          if (Object.keys(newRoot).length > 0) {
            path[root].push(key);
            return traverse(tree[key], target, root);
          }
          return;
        }
      }
    });
    if (!done) {
      path[root].pop();
    }
    return;
  };

  const roots = Object.keys(tree);
  roots.forEach((root) => {
    path[root] = [];
    traverse(tree[root], target, root);
  });
  if (fullPath.length) {
    return ["root", ...fullPath];
  } else {
    return null;
  }
};

const pathAA = findPath(tree, "AA");
const pathE = findPath(tree, "E");

console.log(pathAA, pathE);
