import Domino from './domino';

export default abstract class Bonepile {
    protected bones: Domino[] = [];
    
    public get size(): number {
        return this.bones.length;
    }

    public remove(domino:Domino): Domino[] {
        const index = this.bones.findIndex(bone => bone.equals(domino));
        return this.bones.slice(0, index).concat(this.bones.slice(index+1));
    }

    
    public forEach(callbackfn: (value: Domino, index: number, array: Domino[]) => void): void {
        this.bones.forEach(callbackfn);
    }

    
    public map(callbackfn: (value: Domino, index: number, array: Domino[]) => any): any[] {
        return this.bones.map(callbackfn);
    }
}