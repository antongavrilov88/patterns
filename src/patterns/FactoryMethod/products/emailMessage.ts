import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

class EmailMessage extends AbstractMessage {
    send() {
        return 'Отправлено электронное письмо'
    }
}

export { EmailMessage }
