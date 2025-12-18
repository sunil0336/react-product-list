import './App.css';
import { ProductProvider } from './context/ProductContext';
import ProductsPage from './pages/Productspage';


function App() {
  return (
    <ProductProvider>
      <ProductsPage />
    </ProductProvider>
  );
}

export default App;
