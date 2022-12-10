export class Circle {
    private radius: number = 1.0;
    private color: string = "red";
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
    public getRadius(): number {
        return this.radius;
    }
    public setRadius(radius: number): void {
        this.radius = radius;
    }
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
