import Domino from './domino';
import remove from '../../utilities/remove';

class Node {
    public next: Node | Node[] | undefined;
    public previous: Node | undefined;
    public isDouble: boolean;

    public constructor(public domino: Domino) {
        this.isDouble = domino.isDouble;
    }
}

export default class Train {
    public head: Node | undefined;

    constructor(domino: Domino) {
        this.head = new Node(domino);
        this.head.previous = undefined;
    }

    private nodeIsInTrain(node:Node): boolean {
        let currentNode: Node = node;
        while(currentNode.previous) {
            currentNode = currentNode.previous;
        }
        return currentNode === this.head;
    }

    public add(endpoint: Node, node: Node, isChickenLeg:boolean = false): boolean {
        if(!this.nodeIsInTrain(endpoint)) {
            throw new Error('Invalid endpoint, endpoint not in train');
        }
        if((endpoint.next) && (!Array.isArray(endpoint.next))) {
            throw new Error('Can not add, parent node is not endpoint');
        } else {
            if(node.isDouble) {
                if(!endpoint.next) {
                    endpoint.next = new Array() as Node[];
                    return true;
                } else if(endpoint.next.length !== (isChickenLeg ? 3 : 2)) {
                    endpoint.next.push(node);
                    return true;
                } else {
                    throw new Error(`Node array is full, chicken leg: ${isChickenLeg}`);
                }
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