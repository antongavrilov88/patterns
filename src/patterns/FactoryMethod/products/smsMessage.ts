import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

/**
 * каждый класс сообщения имеет метод отправки, но реализует его по разному
 */

class SmsMessage extends AbstractMessage {
    constructor(message: string) {
        super(message);
    }
    send(): string {
        return `Отправлено смс сообщение: ${this.message}`;
    }
}

export { SmsMessage }
