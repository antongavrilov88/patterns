import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

/**
 * каждый класс сообщения имеет метод отправки, но реализует его по разному
 */

class SmsMessage implements AbstractMessage {
    public readonly message: string;
    constructor(message: string) {
        this.message = message
    }
    send(): string {
        return `Отправлено смс сообщение: ${this.message}`;
    }
}

export { SmsMessage }
