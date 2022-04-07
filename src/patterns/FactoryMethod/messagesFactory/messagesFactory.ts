import {AbstractMessageCreator} from "../../../abstract/FactoryMethod/AbstractCreator";
import {AbstractMessagesFactory} from "../../../abstract/FactoryMethod/AbstractMessagesFactory";
import {AbstractMessage} from "../../../abstract/FactoryMethod/AbstractProduct";

class MessagesFactory extends AbstractMessagesFactory {
    factoryMethod(creator: AbstractMessageCreator): AbstractMessage {
        return creator.createMessage();
    }
}

export { MessagesFactory }
