import './App.css';
import { Builder } from './view/builder'
import { FactoryMethod } from './view/factoryMethod';
import {AbstractFactory} from "./view/abstractFactory";

function App() {
  return (
    <div className="App">
      Patterns
      <Builder />
        <br />
        <br />
        <FactoryMethod />
        <br />
        <br />
        <AbstractFactory />
    </div>
  );
}

export default App;
