import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

/**
 * каждый класс сообщения имеет метод отправки, но реализует его по разному
 */

class EmailMessage implements AbstractMessage {
    public readonly message: string;
    constructor(message: string) {
        this.message = message
    }
    send() {
        return `Отправлено электронное письмо: ${this.message}`
    }
}

export { EmailMessage }
