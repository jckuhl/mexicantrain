import Domino from './domino';
import BoneArray from './bonepile';

export default class Hand extends BoneArray {

    public get score(): number {
        let sum = 0;
        this.bones.forEach(bone => sum += bone.score)
        return sum;
    }

    constructor(bones: Domino[]) {
        super();
        this.bones = bones;
    };

    public add(domino:Domino): void {
        this.bones.push(domino);
    }
}