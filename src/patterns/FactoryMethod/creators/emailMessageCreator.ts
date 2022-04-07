import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";
import {EmailMessage} from "../products/emailMessage";

/**
 * класс создатель сообщения реализует фабричный метод, возвращая объект сообщения соответсвующего класса
 */

class EmailMessageCreator extends AbstractMessageCreator {
    create(message: string): AbstractMessage {
        return new EmailMessage(message);
    }
}


export { EmailMessageCreator }
