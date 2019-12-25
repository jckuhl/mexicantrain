import Domino from './domino';
import Hand from './hand';
import random from '../../utilities/random';
import BoneArray from './bonepile';

/**
 * Represents a pile of dominos (the Boneyard) players draw from
 * @extends BoneArray
 */
export default class Boneyard extends BoneArray {

    constructor() {
        super();
        for(let i = 0; i < 13; i++) {
            for(let j = i; j < 13; j++) {
                const domino = new Domino(i,j);
                this.bones.push(domino);
            }
        }
    }

    /**
     * Draws a bone from the Boneyard, removes it, and returns it
     * @returns the domino drawn from Boneyard
     */
    public drawBone(): Domino {
        const index = random(this.bones.length);
        const domino = this.bones[index];
        this.bones = this.remove(domino);
        return domino;
    }

    public drawHand(amt: number): Hand {
        const dominoes: Domino[] = [];
        while(dominoes.length < amt) {
            dominoes.push(this.drawBone());
        }
        return new Hand(dominoes);
    }
 }