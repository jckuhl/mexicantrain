import Domino from './domino';
import remove from '../../utilities/remove';

class Node {
    public previous: Node | undefined;
    public next: Node | Node[] | undefined;

    constructor(public domino: Domino) {}
}

export default class Train {
    public head: Node | undefined;

    constructor(node: Node) {
        this.head = node;
        this.head.previous = undefined;
    }

    private nodeIsInTrain(node:Node): boolean {
        let currentNode: Node = node;
        while(currentNode.previous) {
            currentNode = currentNode.previous;
        }
        return currentNode === this.head;
    }

    public add(endpoint: Node, node: Node): boolean {
        if(!this.nodeIsInTrain(endpoint)) {
            throw new Error('Invalid endpoint, endpoint not in train');
        }
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

    public findEndpoints(): Node[] {
        if(this.head === undefined) return [];
        let startNodes: Node[] = [this.head];
        let endPoints: Node[] = [];
        
        while(startNodes.length !== 0) {
            for(let node of startNodes) {
                let currentNode = node;
                startNodes = remove(startNodes, currentNode);
                while(currentNode.next) {
                    if(Array.isArray(currentNode.next)) {
                        startNodes.concat(currentNode.next);
                        break;
                    }
                    currentNode = currentNode.next;
                }
                endPoints.push(currentNode);
            }
        }

        return endPoints;
    }
} 