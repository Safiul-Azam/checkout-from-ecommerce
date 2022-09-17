import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Products from './component/Products/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
