import {AbstractSquare} from "../../../../abstract/AbstractFactory/AbstractProducts/AbstractSquare";

class RedSquare implements AbstractSquare {
    constructor(size: number) {
        this.size = size
    }
    public readonly size: number;
    getSq(): string {
        return `Я красный квадрат, площадью ${this.size * this.size}`;
    }

}

export { RedSquare }
