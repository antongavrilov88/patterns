import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

class SmsMessage extends AbstractMessage {
    send(): string {
        return "Отправлено смс сообщение";
    }
}

export { SmsMessage }
