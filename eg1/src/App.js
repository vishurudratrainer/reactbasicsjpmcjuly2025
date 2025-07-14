import './App.css';
import Calculator from './components/functional/Calculator';
import NewCalculator from './components/functional/nonconditional/NewCalculator';


function App() {
  return (
    <div className="App">
      <Calculator/>
      <NewCalculator/>
    </div>
  );
}

export default App;
