import Domino from './domino';

/**
 * Abstract class that any array of bones, ex: Boneyard, Hand, inherits from
 */
export default abstract class BoneArray {
    protected bones: Domino[] = [];
    
    /**
     * @returns number of bones in BoneSet
     */
    public get size(): number {
        return this.bones.length;
    }

    public get isEmpty(): boolean {
        return this.bones.length === 0;
    }

    /**
     * Removes a domino from the set
     * @param {Domino} domino 
     */
    public remove(domino:Domino): Domino[] {
        const index = this.bones.findIndex(bone => bone.equals(domino));
        return this.bones.filter(bone => !bone.equals(domino))
        //return this.bones.slice(0, index).concat(this.bones.slice(index+1));
    }

    /**
     * Exposes Array.prototype.forEach on BoneArray
     * @param callbackfn Function passed into forEach
     */
    public forEach(callbackfn: (value: Domino, index: number, array: Domino[]) => void): void {
        this.bones.forEach(callbackfn);
    }
    
    /**
     * Exposes Array.prototype.map on BoneArray
     * @param callbackfn Function passed into map
     * @returns a new array of results from callbackfn
     */
    public map(callbackfn: (value: Domino, index: number, array: Domino[]) => any): any[] {
        return this.bones.map(callbackfn);
    }
}