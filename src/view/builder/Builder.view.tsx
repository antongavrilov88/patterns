import React from 'react';
import { PriceListBuilder } from '../../patterns/builder/builders/PriceListBuilder';
import { DetailsListBuilder } from '../../patterns/builder/builders/ProductBuilder';
import { Director } from '../../patterns/builder/directors/Director';

const BuilderView: React.FC = () => {

    /*
    Общий строитель, который умеет создавать любую конфигурацию продукта Product1
    */
    const builder = new DetailsListBuilder()

    /*
    Клиентский код может сам управлять строителем
    */
    builder.addExclMarkDetail()
    builder.addCoolDetail()
    builder.addExclMarkDetail()
    builder.addProductDetail()
    builder.addExclMarkDetail()

    const clientMadeProduct = builder.getResult()

    /*
     Так же можно использовать Директора для управления строителем
     */

     // создаем строителя, который умеет создавать любую конфигурацию продукта Product1
     const builderForDirector = new DetailsListBuilder()

     // создаем директора, который умеет управлять строителями, реализующими общий интерфейс и передаем ему строителя
     const director = new Director(builderForDirector)

     /* просим директора создать продукт в конфигурации 'awesome'. На самом деле мы просим его проконтролировать создание этого продукта переданным строителем.
     Директор, получив тип запрашиваемого продукта, вызовет необходимые методы строителя в нужной последовательности
     */
     director.make('awesome')

     /*
     Теперь мы можем попросить строителя вернуть готовый продукт
     */
     const awesomeProduct = builderForDirector.getResult()

     /*
     Так как после перед тем как запустить процесс создания продукта, директор "обнуляет" продукт, находящийся у строителя, мы можем
     попросить директора сделать новую конфигурацию, а после этого строитель вернет нам новый экземпляр в новой конфигурации
     */

    director.make('cool')
    const coolProduct = builderForDirector.getResult()

    /*
    Теперь создадим строителя, который умеет делать лист цен на детали из которых состоит продукт. Для того чтобы директор мог управлять этим строителем тоже, оба строителя
    (и для продукта и для платежной ведомости) должны реализовывать один и тот же интерфейс
    */
   const priceBuilderForDirector = new PriceListBuilder()

   // создадим директора для платежной ведомости и передадим ему нового строителя
   const priceListDirector = new Director(priceBuilderForDirector)

   // попросим его сделать платежную ведомость для конфигурации Awesome
   priceListDirector.make('awesome')
   
   const awesomePriceList = priceBuilderForDirector.getResult()


    return (
        <div>
            Builder
            <br />
            Клиент управляет строителем сам: {clientMadeProduct.value}
            <br />
            Клиент передал управление строителем директору и попросил сделать Product в конфигурации Awesome: {awesomeProduct.value}
            <br />
            Клиент снова попросил директора сделать Product, на этот раз в конфигурации Cool: {coolProduct.value}
            <br />
            Клиент создал строителя платежных ведомостей, нового директора и передал ему строителя с заданием создать платежную ведомость для продукта в конфигурации awesome: {awesomePriceList.value}
        </div>
    )
}

export { BuilderView }