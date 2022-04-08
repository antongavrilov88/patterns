import {AbstractFactory} from "../../../abstract/AbstractFactory/AbstractFactory/AbstractFactory";
import {GreenCircle} from "../Products/GreenProducts/GreenCircle";
import {GreenSquare} from "../Products/GreenProducts/GreenSquare";

class GreenFactory implements AbstractFactory {
    createCircle(radius: number): GreenCircle {
        return new GreenCircle(radius);
    }

    createSquare(size: number): GreenSquare {
        return new GreenSquare(size);
    }
}

export { GreenFactory }
