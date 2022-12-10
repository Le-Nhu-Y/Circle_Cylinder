import {Circle} from "./Circle";

export class Cylinder extends Circle{
    private height: number=1.0
    constructor(height: number,radius:number,color:string) {
        super(radius,color);
        this.height = height;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number) {
        this.height = height;
    }
    public getCapacity(): number {
        return this.height*Math.PI*this.getRadius()
    }
}