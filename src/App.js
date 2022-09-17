import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './component/CheckOut/CheckOut';
import Home from './component/Home/Home';
import Products from './component/Products/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
