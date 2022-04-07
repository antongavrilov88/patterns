import {AbstractMessage} from "./AbstractProduct";

/**
 * create - фабричный метод, который возвращает объект сообщения, реализующий интерфейс AbstractMessage
 */

abstract class AbstractMessageCreator {
    public abstract create(input: string): AbstractMessage
}

export { AbstractMessageCreator }
