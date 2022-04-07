/**
 * Объявляем абстрактный класс продуктов (в нашем примере будут сообщения)
 * с абстрактным методом send. Этот метод каждый конкретный класс сообщений
 * будет реализовывать по своему
 */

abstract class AbstractMessage {
    protected constructor(message: string) {
        this.message = message
    }
    public readonly message: string
    public abstract send(): string
}

export { AbstractMessage }
