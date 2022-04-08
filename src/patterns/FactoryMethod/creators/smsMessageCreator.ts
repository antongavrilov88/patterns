import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {SmsMessage} from "../products/smsMessage";

/**
 * класс создатель сообщения реализует фабричный метод, возвращая объект сообщения соответсвующего класса
 */

class SmsMessageCreator implements AbstractMessageCreator {
    create(message: string): SmsMessage {
        return new SmsMessage(message);
    }
}

export { SmsMessageCreator }
