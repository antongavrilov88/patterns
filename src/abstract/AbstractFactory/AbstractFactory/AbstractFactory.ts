import {AbstractCircle} from "../AbstractProducts/AbstractCircle";
import {AbstractSquare} from "../AbstractProducts/AbstractSquare";

abstract class AbstractFactory {
    public abstract createCircle(radius: number): AbstractCircle
    public abstract createSquare(size: number): AbstractSquare
}

export { AbstractFactory }
