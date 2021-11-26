import './App.css';
import { CatalogueProvider } from './Providers/catalogue';
import { CartProvider } from './Providers/cart';
import ProductList from './components/product-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <ProductList type={"catalogue"}></ProductList>
            <ProductList type={"cart"}></ProductList>
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
