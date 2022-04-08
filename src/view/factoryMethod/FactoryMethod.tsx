import { EmailMessageCreator, SmsMessageCreator } from '../../patterns/FactoryMethod/creators'
import React from "react";
import {AbstractMessage} from "../../abstract/FactoryMethod/AbstractProduct";
import {AbstractMessageCreator} from "../../abstract/FactoryMethod/AbstractCreator";

const FactoryMethod: React.FC = () => {

    const messageSender: (message: AbstractMessage) => JSX.Element = (message) => {
        return <>
            <br />
            <br />
            {message.send()}
        </>
    }

    /**
     * создаем объекты создатели для каждого типа сообщений
     */

    const smsCreator = new SmsMessageCreator()
    const emailCreator = new EmailMessageCreator()

    /**
     * создаем массив сообщений при помощи
     */
    const messages = [emailCreator.create('Hello world'), smsCreator.create('Goodbye world')]

    /**
     * клиентский код - функция remindUserHandler принимает любой объект, реализующий интерфейс AbstractMessageCreator.
     * Все такие объекты реализуют фабричный метод (в данном примере create()), который возвращает объект сообщения (реализующий интерфейс AbstractMessage),
     * соответствующего класса. Все такие объекты сообщений реализуют метод send(), который и вызывается клиентским кодом.
     * Функция remindUserHandler ничего не знает о типе сообщения, с которым она работает. Она лишь ожидает увидеть у него метод send(). Как он реализован и
     * что это за сообщение для функции не важно.
     * Если будет нужно добавить другие типы сообщений или изменить способ отправки уже сущестующих, то это не повлияет на клиентский код.
     * Нужно только чтобы новые виды сообщений реализовывали тот же интерфейс, а их создатели реализовывали тот же фабричный метод.
     * Код нашей функции remindUserHandler никак не привязан к конкретным классам, а только к общим интерфейсам
     * @param messageCreator
     * @param message
     */
    const userReminder: (messageCreator: AbstractMessageCreator, message: string) => string = (messageCreator, message) => {
        const reminderMessage = messageCreator.create(message)
        return reminderMessage.send()
    }

    const smsReminder = () => userReminder(smsCreator, 'Я смс напоминание')
    const emailReminder = () => userReminder(emailCreator, 'Я е-мэйл напоминание')

    return (
        <>
            <>Фабричный метод</>
            <br />
            Клиентский код отправляет сообщения, но не знает какого они типа. Он просто ожидает что все они реализуют один и тот же интерфейс:
            <br />
            {
                messages.map(messageSender)
            }
            <br />
            {smsReminder()}
            <br/>
            {emailReminder()}
        </>

    )
}


export { FactoryMethod }
