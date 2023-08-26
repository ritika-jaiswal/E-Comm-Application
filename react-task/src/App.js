import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductList';
import IndividualProPage from './pages/IndividualProPage';
import CartPage from './pages/CartPage';

function App() {
  return (
<Router>
    <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/product_list" element={<ProductDetail/>}/>
      <Route path="/product/:id" element={<IndividualProPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>

    </Routes>
    </Router>
  );
}

export default App;
