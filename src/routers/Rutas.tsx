import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "../faces/HomePage";
import ProductDetail from "../faces/ProductDetail";
import Header from '../faces/Header';

const RoutePath  = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<><Header/><HomePage /></>} >
          </Route>
          <Route path={'/detalle/:idProduct'} element={<><Header/><ProductDetail /></>} >
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default RoutePath 
