import {AbstractMessage} from "./AbstractProduct";

abstract class AbstractMessageCreator {
    public abstract createMessage(): AbstractMessage
}

export { AbstractMessageCreator }
