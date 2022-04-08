import {AbstractFactory} from "../../../abstract/AbstractFactory/AbstractFactory/AbstractFactory";
import {RedCircle} from "../Products/RedProducts/RedCircle";
import {RedSquare} from "../Products/RedProducts/RedSquare";

class RedFactory implements AbstractFactory {
    createCircle(radius: number): RedCircle {
        return new RedCircle(radius);
    }

    createSquare(size: number): RedSquare {
        return new RedSquare(size);
    }
}

export { RedFactory }
