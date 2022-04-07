# Паттерны проектирования

## Строитель (Builder)

В примере есть 2 сущности - список деталей для производства продукта и список цен на эти детали.

Есть 2 сласса строителя, каждый из которых может создать любую конфигурацию либо списка деталей либо списка цен.

Есть класс директор, который принимает строителей через конструктор (можно изменить код, чтобы принимать строителя через сеттер, либо прямо в методе make).
У директора есть методы make-, которые путем вызова разных последовательностей методов строителя, конфигурирует запрашиваемый продукт. После чего продукт можно получить у строителя.

## Фабричный метод (Factory method)

В примере есть 2 сущности - сообщения разных типов (sms и email). Так же есть классы создатели для каждого из видов сообщений. Оба вида сообщений реализуют один и тот же интерфейс с абстрактным методом send(). Оба создателя реализуют общий интерфейс с абстрактным методом create(), принимающий аргументом текст сообщения и возвращает объект сообщения, с текстом, переданным методу в виде аргумента.

Клиентский код получает массив сообщений созданных фабричным методом разными создателями (то есть в массиве сообщения разных типов, но клиентскому коду об этом не известно). Получив массив сообщений неизвестного типа, клиентский код вызывает метод send() у каждого из сообщений в массиве. Эти методы каждый класс сообщений реализует по-своему, что мы и видим в результате их работы.