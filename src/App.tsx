import './App.css';
import { Builder } from './view/builder'
import { FactoryMethod } from './view/factoryMethod';
import {AbstractFactory} from "./view/abstractFactory";
import { Tabs } from './view/components/tabs'

function App() {
  return (
    <div className="App">
      <Tabs tabs={[
        { title: 'Строитель', content: <Builder /> },
        { title: 'Фабричный метод', content: <FactoryMethod /> },
        { title: 'Абстрактная фабрика', content: <AbstractFactory /> },
    ]}/>
    </div>
  );
}

export default App;
