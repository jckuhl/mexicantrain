export default class Domino {
    public static readonly DOUBLE_BLANK_SCORE = 50;
    public score: number;
    public selected: boolean = false;

    //in the context of a boneyard where every domino is unique, this id is unique
    public id: string = '';
    
    public get isDouble(): boolean {
        return this.left === this.right;
    }
    
    constructor(public left: number, public right: number) {
        if(this.isDouble && this.left === 0) {
            this.score = Domino.DOUBLE_BLANK_SCORE;
        } else {
            this.score = this.left + this.right;
        }
        this.id = this.left.toString() + this.right.toString() + this.score.toString();
    }

    /**
     * Determines the equality of two dominoes by ID.
     * @param {Domino} other The other domino being compared
     */
    public equals(other:Domino): boolean {
        return this.id === other.id;
    }

    /**
     * Determines if the two dominoes have a matching end.
     * @param domino1 
     * @param domino2 
     */
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