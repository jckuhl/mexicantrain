import Train from '../dominos/train';
import Hand from '../dominos/hand';

export default class Player {
    public trains: Train[] = [];
    public hand: Hand | undefined;
    public turn: boolean = false;

    public get score(): number {
        return this.hand ? this.hand.score : 0;
    }

    constructor(public name: string) {}
}