import {AbstractSquare} from "../../../../abstract/AbstractFactory/AbstractProducts/AbstractSquare";

class GreenSquare implements AbstractSquare {
    constructor(size: number) {
        this.size = size
    }
    public readonly size: number;
    getSq(): string {
        return `Я зеленый квадрат, площадью ${this.size * this.size}`;
    }
}

export { GreenSquare }
