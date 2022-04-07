import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";
import {EmailMessage} from "../products/emailMessage";

class EmailMessageCreator extends AbstractMessageCreator {
    createMessage(): AbstractMessage {
        return new EmailMessage();
    }
}

export { EmailMessageCreator }
