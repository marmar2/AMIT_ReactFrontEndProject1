import { Route, Routes } from 'react-router-dom';

import Products from './Pages/Products';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import Nav from './Components/NavBar/Nav'
import Home from './Pages/Home';


function App() {
  return (
    <>
  
    <Nav />
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Products/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
      </Routes>

    </>
  );
}

export default App;
