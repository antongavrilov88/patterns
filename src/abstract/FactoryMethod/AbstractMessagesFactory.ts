import {AbstractMessageCreator} from "./AbstractCreator";
import {AbstractMessage} from "./AbstractProduct";

abstract class AbstractMessagesFactory {
    public abstract factoryMethod(creator: AbstractMessageCreator): AbstractMessage
}

export { AbstractMessagesFactory }
