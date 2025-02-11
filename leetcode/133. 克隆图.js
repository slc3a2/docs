/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // 如果输入节点为空，直接返回 null
  if (!node) return null;
  // 创建一个哈希表用于存储已经克隆过的节点
  const visited = new Map();

  // 定义深度优先搜索函数
  function dfs(originalNode) {
    // 如果该节点已经被克隆过，直接返回克隆节点
    if (visited.has(originalNode)) {
      return visited.get(originalNode);
    }
    // 创建一个新的克隆节点
    const cloneNode = new Node(originalNode.val);
    // 将克隆节点存储在哈希表中
    visited.set(originalNode, cloneNode);
    // 遍历原始节点的相邻节点
    for (const neighbor of originalNode.neighbors) {
      // 递归地克隆相邻节点
      const cloneNeighbor = dfs(neighbor);
      // 将克隆后的相邻节点添加到克隆节点的 neighbors 数组中
      cloneNode.neighbors.push(cloneNeighbor);
    }
    // 返回克隆节点
    return cloneNode;
  }

  // 从起始节点开始进行深度优先搜索
  return dfs(node);
};
