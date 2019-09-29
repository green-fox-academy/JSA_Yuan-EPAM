class NodeDual {
    val: string;
    left: NodeDual | null;
    right: NodeDual | null;

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;        
    }
}

export default NodeDual;