import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";
import {SmsMessage} from "../products/smsMessage";

/**
 * класс создатель сообщения реализует фабричный метод, возвращая объект сообщения соответсвующего класса
 */

class SmsMessageCreator extends AbstractMessageCreator {
    create(message: string): AbstractMessage {
        return new SmsMessage(message);
    }
}

export { SmsMessageCreator }
