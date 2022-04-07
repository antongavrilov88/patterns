import './App.css';
import { Builder } from './view/builder'
import { FactoryMethod } from './view/factoryMethod';

function App() {
  return (
    <div className="App">
      Patterns
      <Builder />
        <FactoryMethod />
    </div>
  );
}

export default App;
