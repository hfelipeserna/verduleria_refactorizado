import "./App.css";
import Nav from './Nav.jsx';
import List from './List.jsx';

function App() {

  const navigation = ["Home", "About", "Contact"];
  const availableProducts = ["Tomate", "Manzana", "Peras"];
  const unavailableProducts= ["Cebolla", "Bananas", ];

  return (
    <div>
      <Nav data={navigation} />
      <List data={availableProducts} label={"Productos disponibles"}/>
      <List data={unavailableProducts} label={"Productos no disponibles"}/>
    </div>
  );
}

export default App;
