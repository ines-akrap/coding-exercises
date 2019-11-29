// Runtime: 56ms =>95%
// Memory: 37MB => 50%

const closestValue = (root, target) => {
  target = Math.round(target);
  let closest = Infinity;

  while(root) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }

    root = target > root.val ? root.right : root.left;
  }
  return closest;
}