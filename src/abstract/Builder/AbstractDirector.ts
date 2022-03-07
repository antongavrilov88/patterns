abstract class AbstractDirector<AbstractBuilder> {

    constructor (protected builder: AbstractBuilder) {}

    abstract make(type?: string): void
}

export { AbstractDirector }