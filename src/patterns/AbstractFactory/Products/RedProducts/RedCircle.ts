import {AbstractCircle} from "../../../../abstract/AbstractFactory/AbstractProducts/AbstractCircle";

class RedCircle implements AbstractCircle {
    public readonly radius: number;
    constructor(radius: number) {
        this.radius = radius
    }

    drawCircle(): string {
        return `Я красный круг, с радиусом ${this.radius}`;
    }
}

export { RedCircle }
