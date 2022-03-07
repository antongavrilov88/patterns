abstract class AbstractBuilder<Product> {
    protected abstract product: Product
    public abstract getResult(): Product
    public abstract reset(): void
}

export { AbstractBuilder }