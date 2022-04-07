import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";
import {SmsMessage} from "../products/smsMessage";

class SmsMessageCreator extends AbstractMessageCreator {
    createMessage(): AbstractMessage {
        return new SmsMessage();
    }
}

export { SmsMessageCreator }
