abstract class AbstractSquare {
    public readonly size: number;
    protected constructor(size: number) {
        this.size = size
    }
    public abstract getSq(): string
}

export { AbstractSquare }
