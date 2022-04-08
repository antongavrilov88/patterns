import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {EmailMessage} from "../products/emailMessage";

/**
 * класс создатель сообщения реализует фабричный метод, возвращая объект сообщения соответсвующего класса
 */

class EmailMessageCreator implements AbstractMessageCreator {
    create(message: string): EmailMessage {
        return new EmailMessage(message);
    }
}


export { EmailMessageCreator }
