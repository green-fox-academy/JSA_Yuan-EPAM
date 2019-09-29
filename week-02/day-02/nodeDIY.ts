class NodeDIY {
    element: string;
    next: NodeDIY | null;

    constructor(element: string | null) {
        this.element = element;
        this.next = null;
    }
}

export default NodeDIY;