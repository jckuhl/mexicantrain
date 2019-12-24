import Domino from './domino';

class Node {
    public previous: Node | undefined;
    public next: Node | Node[] | undefined;

    constructor(public domino: Domino) {}
}

class Train {
    public head: Node | undefined;

    constructor(node: Node) {
        this.head = node;
    }

    public add(endpoint: Node, node: Node): boolean {
        if(endpoint.next) {
            if(Array.isArray(endpoint.next)) {
                if(endpoint.next.length != 2) {
                    endpoint.next.push(node);
                    node.previous = endpoint;
                    return true;
                }
                return false;
            } else {
                endpoint.next = node;
                node.previous = endpoint;
                return true;
            }
        }
        return false;
    }
} 