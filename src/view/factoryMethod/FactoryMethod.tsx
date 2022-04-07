import { EmailMessageCreator, SmsMessageCreator } from '../../patterns/FactoryMethod/creators'
import React from "react";
import {AbstractMessage} from "../../abstract/FactoryMethod/AbstractProduct";

const FactoryMethod: React.FC = () => {

    const messageSender: (message: AbstractMessage) => JSX.Element = (message) => {
        return <>
            <br />
            <br />
            {message.send()}
        </>
    }

    const smsCreator = new SmsMessageCreator()
    const emailCreator = new EmailMessageCreator()

    const messages = [emailCreator.create('Hello world'), smsCreator.create('Goodbye world')]

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
