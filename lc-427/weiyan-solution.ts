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

 function construct(grid: number[][]): Node | null {
    
	if (grid.length === 1) {
			return new Node(grid[0][0]===1, true);
	}
	
	const length = grid.length/2;
	const topLeft = new Array(length);
	const topRight = new Array(length);
	const bottomLeft = new Array(length);
	const bottomRight = new Array(length);
	for (let i=0; i<length; i++) {
			topLeft[i] = new Array(length);
			topRight[i] = new Array(length);
			bottomLeft[i] = new Array(length);
			bottomRight[i] = new Array(length);
	}
	
	for (let i=0; i<grid.length; i++) {
			for (let j=0; j<grid.length; j++) {
					if (i < length && j < length) {
							topLeft[i][j] = grid[i][j];
					} else if (j >= length && i < length) {
							topRight[i][j-length] = grid[i][j];
					} else if (j < length && i >= length) {
							bottomLeft[i-length][j] = grid[i][j];
					} else {
							bottomRight[i-length][j-length] = grid[i][j];
					}
			}
	}
	
	const topLeftNode = construct(topLeft);
	const topRightNode = construct(topRight);
	const bottomLeftNode = construct(bottomLeft);
	const bottomRightNode = construct(bottomRight);
	
	if (topLeftNode.isLeaf
		 && topRightNode.isLeaf
		 && bottomLeftNode.isLeaf
		 && bottomRightNode.isLeaf
		 && topLeftNode.val === topRightNode.val
		 && topLeftNode.val === bottomLeftNode.val
		 && topLeftNode.val === bottomRightNode.val) {
			return new Node(topLeftNode.val, true);
	} else {
			return new Node(true, false, topLeftNode, topRightNode, bottomLeftNode, bottomRightNode);
	}
};