abstract class AbstractCircle {
    public readonly radius: number;
    protected constructor(radius: number) {
        this.radius = radius
    }
    public abstract drawCircle(): string
}

export { AbstractCircle }
