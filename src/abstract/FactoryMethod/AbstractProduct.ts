/**
 * Объявляем абстрактный класс продуктов (в нашем примере будут сообщения)
 * с абстрактным методом send. Этот метод каждый конкретный класс сообщений
 * будет реализовывать по своему
 */

abstract class AbstractMessage {
    public abstract send(): string
}

export { AbstractMessage }
