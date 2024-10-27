<script>

// Javascript program to Merge Two Binary Trees
class Node
{
	constructor(data) 
	{
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

// Helper method that allocates a new
// node with the given data and NULL 
// left and right pointers. 
function newNode(data)
{
	return new Node(data);
}

// Given a binary tree, print its 
// nodes in inorder
function inorder(node)
{
	if (node == null)
		return;
	
	// First recur on left child 
	inorder(node.left);
	
	// Then print the data of node 
	document.write(node.data + " ");
	
	// Now recur on right child 
	inorder(node.right);
}

// Method to merge given two binary trees
function MergeTrees(t1, t2)
{
	if (t1 == null)
		return t2;
	if (t2 == null)
		return t1;
		
	t1.data += t2.data;
	t1.left = MergeTrees(t1.left, t2.left);
	t1.right = MergeTrees(t1.right, t2.right);
	return t1;
}

// Driver code
/* Let us construct the first Binary Tree
			1
		/ \
		2	 3
		/ \	 \
		4 5	 6
	*/
let root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.left.left = newNode(4);
root1.left.right = newNode(5);
root1.right.right = newNode(6);

/* Let us construct the second Binary Tree
			4
			/ \
		1	 7
		/	 / \
		3	 2 6 */
let root2 = newNode(4);
root2.left = newNode(1);
root2.right = newNode(7);
root2.left.left = newNode(3);
root2.right.left = newNode(2);
root2.right.right = newNode(6);

let root3 = MergeTrees(root1, root2);
document.write("The Merged Binary Tree is:" + "</br>");
inorder(root3);

// This code is contributed by divyeshrabadiya07

</script>
