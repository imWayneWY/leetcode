/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

 function intersect(quadTree1: Node | null, quadTree2: Node | null): Node | null {
	if (!quadTree1 || !quadTree2) return null;
	
	const ans = new Node();
	if (!quadTree1.isLeaf && !quadTree2.isLeaf) {
			ans.val = quadTree1.val || quadTree2.val;
			ans.isLeaf = false;
			ans.topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
			ans.topRight = intersect(quadTree1.topRight, quadTree2.topRight);
			ans.bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
			ans.bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
			
			if (ans.topLeft?.isLeaf
					&& ans.topRight?.isLeaf
					&& ans.bottomLeft?.isLeaf
					&& ans.bottomRight?.isLeaf
					&& ans.topLeft?.val === ans.topRight?.val
					&& ans.topLeft?.val === ans.bottomLeft?.val
					&& ans.topLeft?.val === ans.bottomRight?.val) {
					ans.isLeaf = true;
					ans.val = ans.topLeft.val;
					ans.topLeft = null;
					ans.topRight = null;
					ans.bottomLeft = null;
					ans.bottomRight = null;
			}
	} else {
			if (quadTree1.isLeaf) {
					if (quadTree1.val === true) {
							ans.val = true;
							ans.isLeaf = true;
					} else {
							return quadTree2;
					}
			} else {
					if (quadTree2.val === true) {
							ans.val = true;
							ans.isLeaf = true;
					} else {
							return quadTree1;
					}
			}
	}
	
	return ans;
};
