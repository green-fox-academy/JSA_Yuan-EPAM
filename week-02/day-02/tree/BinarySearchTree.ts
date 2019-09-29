import NodeDual from './nodeDual';
import Tree from './Tree';

class BinarySearchTree implements Tree {
    root: NodeDual | null;

    constructor() {
        this.root = null;
    }

    empty(): boolean {
        return this.root === null;
    }

    private addNode(root: NodeDual, node: NodeDual) {
        if (node.val < root.val) {
            if (node.left === null) {
                root.left = node;
            } else {
                this.addNode(root.left, node);
            }
        } else {
            if (node.val > root.val) {
                if (root.right === null) {
                    root.right = node;
                } else {
                    this.addNode(root.right, node);
                }
            }
        }
    }

    add(value: string): void {
        let node: NodeDual = new NodeDual(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.addNode(this.root, node);
        }
    }

    private findMinNode(node: NodeDual): NodeDual {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    private removeNode(root: NodeDual, value: string): NodeDual {
        if (root === null) {
            return null;
        } else if (value < root.val) { // Remove to the left subtree
            root.left = this.removeNode(root.left, value);
        } else if (value > root.val) { // Remove to the right subtree
            root.right = this.removeNode(root.right, value);
        } else {
            // This node without child (leaf node)
            if ((root.left === null) && (root.right === null)) {
                return null;
            } 
            // If this node has a child, delete this node directly
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // If a node has two children, 
            let minNode: NodeDual = this.findMinNode(root.right);
            root.val = minNode.val;
            root.right = this.removeNode(root.right, minNode.val);
            return root;
        }
    }

    remove(value: string): void {
        this.root = this.removeNode(this.root, value);
    }

    searchNodeByValue(node: NodeDual, value: string): NodeDual {
        if (node === null) {
            return null;
        } else if (node.val > value) {
            return this.searchNodeByValue(node.left, value);
        } else if (node.val < value) {
            return this.searchNodeByValue(node.right, value);
        } else {
            return node;
        }
    }

    search(value: string): boolean {
        let node = this.searchNodeByValue(this.root, value);
        return node != null;
    }
}

export default BinarySearchTree;
