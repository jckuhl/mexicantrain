import Domino from './domino';
import Bonepile from './bonepile';

export default class Hand extends Bonepile {
    public get score(): number {
        let sum = 0;
        this.bones.forEach(bone => sum += bone.score)
        return sum;
    }
    
    public get size(): number {
        return this.bones.length;
    }

    constructor(bones: Domino[]) {
        super();
        this.bones = bones;
    };

    public add(domino:Domino): void {
        this.bones.push(domino);
    }
}