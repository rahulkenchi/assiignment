import './App.css';
import List from './component/List';
import Nav from './component/Nav'
import Product from './component/Product';

function App() {
  return (
    <div className="App">
        <Nav />
        <List />
        <Product />
    </div>
  );
}

export default App;
