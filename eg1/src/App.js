import './App.css';
import Calculator from './components/functional/Calculator';
import NewCalculator from './components/functional/nonconditional/NewCalculator';
import Color from './components/props/Color';


function App() {
  return (
    <div className="App">
      <Color/>
      <Calculator/>
      <NewCalculator/>
    </div>
  );
}

export default App;
