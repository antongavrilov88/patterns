import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

/**
 * каждый класс сообщения имеет метод отправки, но реализует его по разному
 */

class EmailMessage extends AbstractMessage {
    constructor(message: string) {
        super(message);
    }
    send() {
        return `Отправлено электронное письмо: ${this.message}`
    }
}

export { EmailMessage }
