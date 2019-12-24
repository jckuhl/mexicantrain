export default class Domino {
    public static readonly DOUBLE_BLANK_SCORE = 50;
    public score: number;

    
    public get isDouble(): boolean {
        return this.left === this.right;
    }
    
    constructor(public left: number, public right: number) {
        if(this.isDouble && this.left === 0) {
            this.score = Domino.DOUBLE_BLANK_SCORE;
        }
        else {
            this.score = this.left + this.right;
        }
    }

    public equals(other:Domino): boolean {
        return (this.left === other.left || this.left === other.right)
            && (this.right === other.left || this.right === other.right);
    }

    static match(domino1:Domino, domino2:Domino): boolean {
        return domino1.left === domino2.left 
            || domino1.left === domino2.right
            || domino1.right === domino2.left
            || domino1.right === domino2.right;
    }

    static add(domino1:Domino, domino2:Domino): number {
        return domino1.score + domino2.score;
    }
}