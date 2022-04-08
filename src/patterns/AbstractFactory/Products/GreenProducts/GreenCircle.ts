import {AbstractCircle} from "../../../../abstract/AbstractFactory/AbstractProducts/AbstractCircle";

class GreenCircle implements AbstractCircle {
    public readonly radius: number;
    constructor(radius: number) {
        this.radius = radius
    }

    drawCircle(): string {
        return `Я зеленый круг, с радиусом ${this.radius}`;
    }
}

export { GreenCircle }
