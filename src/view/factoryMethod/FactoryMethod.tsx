import { SmsMessageCreator, EmailMessageCreator } from '../../patterns/FactoryMethod/creators'
import React from "react";
import {AbstractMessage} from "../../abstract/FactoryMethod/AbstractProduct";
import {MessagesFactory} from "../../patterns/FactoryMethod/messagesFactory/messagesFactory";

const FactoryMethod: React.FC = () => {

    const messageSender: (message: AbstractMessage) => JSX.Element = (message) => {
        return <>
            <br />
            <br />
            {message.send()}
        </>
    }

    const messagesFactory = new MessagesFactory()

    const messageCreators = [new SmsMessageCreator(), new EmailMessageCreator()]

    const messages = messageCreators.map(messagesFactory.factoryMethod)

    return (
        <>
            <>Фабричный метод</>
            <br />
            Клиентский код отправляет сообщения, но не знает какого они типа. Он просто ожидает что все они реализуют один и тот же интерфейс:
            <br />
            {
                messages.map(messageSender)
            }
        </>

    )
}


export { FactoryMethod }
