import logo from './logo.svg';
import './App.css';
import ListCards from './components/cards/ListCards'; 
import navbar from './components/navbar/navbar';
import Calculadora from './components/Calculadora/Calculadora';
function App() {
  return (
    <div className="App">
      <navbar/>
      <ListCards/>
      <Calculadora/> 
   
    </div>
  );
}

export default App;