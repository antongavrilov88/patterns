import React from 'react'
import {AbstractFactory} from "../../abstract/AbstractFactory/AbstractFactory/AbstractFactory";
import {RedFactory} from "../../patterns/AbstractFactory/Factories/RedFactory";
import {GreenFactory} from "../../patterns/AbstractFactory/Factories/GreenFactory";

const AbstractFactoryView: React.FC = () => {

    const redFactory = new RedFactory()
    const greenFactory = new GreenFactory()

    const shapesDrawer: (shapeFactory: AbstractFactory) => JSX.Element = (shapeFactory) => {
        const circle = shapeFactory.createCircle(3)
        const square = shapeFactory.createSquare(4)

        return (
            <>
                <br />
                <br />
                Клиентский код рисует круг, но не знает каого он цвета
                <br />
                <br />
                {circle.drawCircle()}
                <br/><br/>
                Тепрь клиентский код рисует квадрат и ожидает что он будет того же цвета, что и круг (какого - код не знает)
                <br />
                <br />
                {square.getSq()}
            </>
        )
    }

    return (
        <>
            Абстрактная фарика
            <br />
            {shapesDrawer(greenFactory)}
            {shapesDrawer(redFactory)}
        </>
    )
}

export { AbstractFactoryView }
